import React, { useState, useEffect } from 'react';
import { MOCK_PACKAGES, MOCK_USERS, COMPANY_DETAILS } from './constants';
import { User, UserRole } from './types';
import { B2CHome } from './components/B2CComponents';
import { B2BPortal } from './components/B2BComponents';
import { Lock, User as UserIcon, LogIn } from 'lucide-react';

const App: React.FC = () => {
  // State to manage which "view" is active (B2C or B2B)
  // In a real app, this would be handled by React Router or Subdomains
  const [currentView, setCurrentView] = useState<'B2C' | 'B2B_LOGIN' | 'B2B_PORTAL'>('B2C');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Login Form State
  const [selectedRoleId, setSelectedRoleId] = useState<string>(MOCK_USERS[0].id);

  const handleLogin = () => {
    const user = MOCK_USERS.find(u => u.id === selectedRoleId);
    if (user) {
      setCurrentUser(user);
      setCurrentView('B2B_PORTAL');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('B2B_LOGIN');
  };

  // Render Logic
  if (currentView === 'B2C') {
    return (
      <B2CHome 
        packages={MOCK_PACKAGES} 
        onOpenLogin={() => setCurrentView('B2B_LOGIN')} 
      />
    );
  }

  if (currentView === 'B2B_LOGIN') {
    return (
      <div className="min-h-screen bg-brand-blue flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border-t-8 border-brand-gold">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-brand-gold shadow-lg overflow-hidden">
               <img src={COMPANY_DETAILS.logo} alt="IH Logo" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-gray-800">B2B Portal Login</h2>
            <p className="text-gray-500 text-sm mt-2">Idea Holiday Private Limited</p>
          </div>

          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm text-yellow-800">
              <strong>Demo Mode:</strong> Select a role to simulate the login experience and see how the UI changes for different users.
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select User Role</label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-3 text-gray-400" size={18} />
                <select 
                  value={selectedRoleId} 
                  onChange={(e) => setSelectedRoleId(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue appearance-none bg-white"
                >
                  {MOCK_USERS.map(user => (
                    <option key={user.id} value={user.id}>
                      {user.name} - {user.role}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button 
              onClick={handleLogin}
              className="w-full bg-brand-blue text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <LogIn size={18} /> Login to Portal
            </button>
            
            <div className="text-center pt-4">
              <button onClick={() => setCurrentView('B2C')} className="text-sm text-gray-500 hover:text-brand-blue underline">
                Return to Website
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'B2B_PORTAL' && currentUser) {
    return <B2BPortal user={currentUser} onLogout={handleLogout} />;
  }

  return <div>Loading...</div>;
};

export default App;