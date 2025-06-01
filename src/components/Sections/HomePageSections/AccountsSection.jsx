import { Link } from 'react-router-dom';
import { Receipt, PiggyBank, Briefcase } from 'lucide-react';

const accounts = [
  {
    title: 'Checking Account',
    description: 'Choose from our checking options that allow you to earn interest, avoid fees, and easily manage your account.',
    icon: <Receipt className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
    link: '/accounts',
  },
  {
    title: 'Savings Accounts',
    description: 'Save for your goals and watch your money grow with a CD, a money market account, a savings account. Your future starts now.',
    icon: <PiggyBank className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
    link: '/accounts',
  },
  {
    title: 'Business Account',
    description: 'Take charge of your business banking with a business bank account. Services including virtual cards, team management and more.',
    icon: <Briefcase className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
    link: '/accounts',
  },
];

const AccountsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h3 className="text-green-700 font-semibold mb-2">Open your account from anywhere in the world</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Solutions for Every<br className="hidden md:inline" /> Business Need.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Power up your business with a full-stack online bank account that fits your needs.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {accounts.map((acc, idx) => (
            <div
              key={acc.title}
              className="bg-white rounded-2xl shadow-lg p-8 flex-1 max-w-md w-full text-center flex flex-col items-center mb-6 md:mb-0"
            >
              {acc.icon}
              <h4 className="font-bold text-lg mb-2 text-gray-900">{acc.title}</h4>
              <p className="text-gray-600 mb-6 text-sm">{acc.description}</p>
              <Link
                to={acc.link}
                className="text-blue-700 font-semibold hover:underline flex items-center justify-center"
              >
                Open Account <span className="ml-1">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountsSection; 