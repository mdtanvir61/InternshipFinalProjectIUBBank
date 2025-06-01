import React, { useState, useEffect } from "react";
import { db } from "../../Firebase/firebase";
import { collection, doc, getDoc, setDoc, updateDoc, arrayUnion, query, where, getDocs } from "firebase/firestore";
import { auth } from "../../Firebase/firebase";
import toast from "react-hot-toast";

const DashboardContent = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState([]);
  const [totalLoanTaken, setTotalLoanTaken] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        setCurrentUser(user);
        const userDocRef = doc(db, "User-form", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setBalance(userData.balance);
          setTransactions((userData.transactionHistory || []).slice().reverse());
          const totalLoan = (userData.transactionHistory || []).filter(t => t.type === "Loan").reduce((sum, t) => sum + t.amount, 0);
          setTotalLoanTaken(totalLoan);
        } else {
          await setDoc(userDocRef, {
            id: user.uid,
            userName: user.displayName || "Unknown User",
            email: user.email,
            balance: 1000,
            transactionHistory: [],
          });
        }
      }
    };

    fetchUserData();
  }, []);

  const handleTransfer = async (e) => {
    e.preventDefault();
    const recipientEmail = e.target.transferTo.value;
    const amount = parseFloat(e.target.transferAmount.value);

    if (amount <= 0 || amount > balance) {
      toast.error("Invalid amount. Please check your balance.");
      return;
    }

    const recipientQuery = query(
      collection(db, "User-form"),
      where("email", "==", recipientEmail)
    );
    const recipientSnapshot = await getDocs(recipientQuery);

    if (recipientSnapshot.empty) {
      toast.error("User not found.");
      return;
    }

    const recipientDoc = recipientSnapshot.docs[0];
    const recipientData = recipientDoc.data();
    const recipientId = recipientDoc.id;

    const senderDocRef = doc(db, "User-form", currentUser.uid);
    await updateDoc(senderDocRef, {
      balance: balance - amount,
      transactionHistory: arrayUnion({
        type: "Transfer",
        amount: -amount,
        to: recipientEmail,
        date: new Date().toISOString(),
      }),
    });

    const recipientDocRef = doc(db, "User-form", recipientId);
    await updateDoc(recipientDocRef, {
      balance: recipientData.balance + amount,
      transactionHistory: arrayUnion({
        type: "Received",
        amount: amount,
        from: currentUser.email,
        date: new Date().toISOString(),
      }),
    });

    setBalance(balance - amount);
    setTransactions((prev) => [
      { type: "Transfer", amount: -amount, to: recipientEmail, date: new Date().toISOString() },
      ...prev,
    ]);

    toast.success("Money transferred successfully!");
  };

  const handleLoan = async (e) => {
    e.preventDefault();
    const amount = parseFloat(e.target.loanAmount.value);
    const maxLoan = 2 * balance;
    const newTotalLoan = totalLoanTaken + amount;

    if (amount <= 0) {
      toast.error("Invalid amount.");
      return;
    }
    if (newTotalLoan > maxLoan) {
      toast.error("You are not eligible for this loan.");
      return;
    }
    if (newTotalLoan === maxLoan) {
      toast.success("Loan successful. You have reached your maximum loan limit.");
    } else {
      toast.success("Loan added to your balance!");
    }

    const userDocRef = doc(db, "User-form", currentUser.uid);
    await updateDoc(userDocRef, {
      balance: balance + amount,
      transactionHistory: arrayUnion({
        type: "Loan",
        amount: amount,
        date: new Date().toISOString(),
      }),
    });

    setBalance(balance + amount);
    setTransactions((prev) => [
      { type: "Loan", amount: amount, date: new Date().toISOString() },
      ...prev,
    ]);
    setTotalLoanTaken(newTotalLoan);
  };

  const handleWithdraw = async (e) => {
    e.preventDefault();
    const amount = parseFloat(e.target.withdrawAmount.value);

    if (amount <= 0 || amount > balance) {
      toast.error("Invalid amount. Please check your balance.");
      return;
    }

    const userDocRef = doc(db, "User-form", currentUser.uid);
    await updateDoc(userDocRef, {
      balance: balance - amount,
      transactionHistory: arrayUnion({
        type: "Withdraw",
        amount: -amount,
        date: new Date().toISOString(),
      }),
    });

    setBalance(balance - amount);
    setTransactions((prev) => [
      { type: "Withdraw", amount: -amount, date: new Date().toISOString() },
      ...prev,
    ]);
    toast.success("Money withdrawn successfully!");
  };

  // Helper for badge color and label
  const getBadge = (type, idx) => {
    if (type === "Loan" || type === "Received" || type === "Deposit") {
      return (
        <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-2">
          {idx + 1} DEPOSIT
        </span>
      );
    }
    if (type === "Withdraw" || type === "Transfer") {
      return (
        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-2">
          {idx + 1} WITHDRAWAL
        </span>
      );
    }
    return (
      <span className="bg-gray-400 text-white text-xs font-bold px-3 py-1 rounded-full mr-2">
        {idx + 1} {type.toUpperCase()}
      </span>
    );
  };

  // Format date as dd/mm/yyyy
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB");
  };

  // Format amount as $1,000.00
  const formatAmount = (amount) =>
    "$" +
    amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className="bg-gray-100">
    <div className="min-h-screen p-0 md:p-8 container pl-[10px] pr-[10px] pt-[10px]">
      <div className="flex flex-col lg:flex-row lg:items-start w-full max-w-[1600px] mx-auto gap-6">
        {/* Left: Transaction History and Header */}
        <div className="w-full lg:w-2/3 lg:pr-8 mb-6 lg:mb-0">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-700 mb-1">Current balance</h2>
            <div className="text-gray-400 text-lg mb-2">
              As of {new Date().toLocaleDateString("en-GB")},{" "}
              {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="max-h-[420px] overflow-y-auto">
              {transactions.length === 0 ? (
                <div className="text-gray-400 text-center py-8">No transactions yet.</div>
              ) : (
                transactions.map((transaction, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b last:border-b-0 px-4 sm:px-6 md:px-8 py-4 md:py-6 gap-2"
                  >
                    <div className="flex items-center">
                      {getBadge(transaction.type, idx)}
                      <span className="text-gray-700 font-semibold text-sm md:text-base">
                        {formatDate(transaction.date)}
                      </span>
                    </div>
                    <div
                      className={`text-base sm:text-lg md:text-2xl font-bold ${
                        transaction.amount > 0 ? "text-gray-700" : "text-gray-700"
                      }`}
                    >
                      {formatAmount(transaction.amount)}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right: Balance and Actions */}
        <div className="w-full lg:w-1/3 flex flex-col gap-10 mt-6 lg:mt-0 pb-6">
          {/* Balance */}
          <div className="flex justify-end mb-2">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700">
              {formatAmount(balance)}
            </span>
          </div>

          {/* Transfer Money */}
          <div className="bg-yellow-400 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-gray-800">Transfer money</h3>
            <form
              onSubmit={handleTransfer}
              className="flex flex-col gap-2 mb-2"
            >
              <input
                type="email"
                name="transferTo"
                placeholder="Transfer to"
                className="flex-1 rounded-md px-4 py-2 sm:py-3 bg-yellow-200 border-none focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
                required
              />
              <input
                type="number"
                name="transferAmount"
                placeholder="Amount"
                className="w-full rounded-md px-4 py-2 sm:py-3 bg-yellow-200 border-none focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-white text-gray-700 font-bold rounded-md w-full h-10 sm:h-12 hover:bg-yellow-200 transition text-xl sm:text-2xl mt-2"
                title="Transfer"
              >
                &rarr;
              </button>
            </form>
          </div>

          {/* Request Loan */}
          <div className="bg-gradient-to-r from-green-400 to-green-300 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-gray-800">Request loan</h3>
            <form onSubmit={handleLoan} className="flex flex-col sm:flex-row items-center gap-2 mb-2">
              <input
                type="number"
                name="loanAmount"
                placeholder="Amount"
                className="w-full rounded-md px-4 py-2 sm:py-3 bg-green-100 border-none focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-white text-gray-700 font-bold rounded-md w-full sm:w-12 h-10 sm:h-12 hover:bg-green-200 transition text-xl sm:text-2xl mt-2 sm:mt-0"
                title="Request Loan"
              >
                &rarr;
              </button>
            </form>
          </div>

          {/* Withdraw */}
          <div className="bg-gradient-to-r from-red-400 to-red-300 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-gray-800">Withdraw</h3>
            <form onSubmit={handleWithdraw} className="flex flex-col sm:flex-row items-center gap-2 mb-2">
              <input
                type="number"
                name="withdrawAmount"
                placeholder="Amount"
                className="w-full rounded-md px-4 py-2 sm:py-3 bg-red-100 border-none focus:outline-none focus:ring-2 focus:ring-red-400 text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-white text-gray-700 font-bold rounded-md w-full sm:w-12 h-10 sm:h-12 hover:bg-red-200 transition text-xl sm:text-2xl mt-2 sm:mt-0"
                title="Withdraw"
              >
                &rarr;
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DashboardContent;