import React, { useState, useMemo } from 'react';
import { Quote, User, UserRole, Message, ItineraryDay } from '../types';
import { MOCK_QUOTES } from '../constants';
import { 
  LayoutDashboard, FileText, Users, Settings, LogOut, 
  Plus, DollarSign, Send, Eye, EyeOff, Calendar, Map, CheckCircle
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// --- Helper Functions for Privacy Wall ---
const shouldHideFinancials = (userRole: UserRole) => {
  return userRole === UserRole.OPERATOR;
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
};

// --- Sub-Components ---

const Sidebar: React.FC<{ role: UserRole, activeTab: string, onTabChange: (t: string) => void, onLogout: () => void }> = ({ role, activeTab, onTabChange, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: [UserRole.ADMIN, UserRole.STAFF, UserRole.AGENT, UserRole.OPERATOR] },
    { id: 'quotes', label: 'Quotes & Itineraries', icon: FileText, roles: [UserRole.ADMIN, UserRole.STAFF, UserRole.AGENT, UserRole.OPERATOR] },
    { id: 'agents', label: 'Agent Management', icon: Users, roles: [UserRole.ADMIN, UserRole.STAFF] },
    { id: 'settings', label: 'Settings', icon: Settings, roles: [UserRole.ADMIN] },
  ];

  return (
    <div className="w-64 bg-brand-blue text-white h-screen fixed left-0 top-0 flex flex-col shadow-2xl">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-heading font-bold text-brand-gold">Idea Holiday</h2>
        <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">{role} PORTAL</p>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.filter(item => item.roles.includes(role)).map(item => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeTab === item.id ? 'bg-brand-gold text-brand-blue font-bold shadow-lg' : 'text-gray-300 hover:bg-gray-800'}`}
          >
            <item.icon size={20} />
            {item.label}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button onClick={onLogout} className="flex items-center gap-3 text-red-400 hover:text-red-300 px-4 py-2 w-full transition-colors">
          <LogOut size={20} /> Logout
        </button>
      </div>
    </div>
  );
};

const DashboardHome: React.FC<{ role: UserRole }> = ({ role }) => {
  // Mock Data for Charts
  const data = [
    { name: 'Jan', sales: 4000, leads: 2400 },
    { name: 'Feb', sales: 3000, leads: 1398 },
    { name: 'Mar', sales: 2000, leads: 9800 },
    { name: 'Apr', sales: 2780, leads: 3908 },
    { name: 'May', sales: 1890, leads: 4800 },
    { name: 'Jun', sales: 2390, leads: 3800 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-gray-500 text-sm mb-1">Total Quotes</div>
          <div className="text-3xl font-bold text-brand-blue">1,245</div>
        </div>
        {role !== UserRole.OPERATOR && (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-gray-500 text-sm mb-1">Revenue (Month)</div>
            <div className="text-3xl font-bold text-green-600">₹45.2L</div>
          </div>
        )}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-gray-500 text-sm mb-1">Pending Actions</div>
          <div className="text-3xl font-bold text-brand-gold">12</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-96">
        <h3 className="font-bold text-gray-700 mb-4">Performance Overview</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#0F172A" />
            <Bar dataKey="leads" fill="#D4AF37" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// --- QUOTE & ITINERARY BUILDER WITH PRIVACY WALL ---

const QuoteDetail: React.FC<{ quote: Quote, user: User, onBack: () => void }> = ({ quote, user, onBack }) => {
  const isOperator = shouldHideFinancials(user.role);
  
  // Chat State
  const [messages, setMessages] = useState<Message[]>([
    { id: 'm1', quoteId: quote.id, senderId: 'u2', senderName: 'Rahul Sharma', senderRole: UserRole.STAFF, content: 'Please check availability for 2 Pax.', timestamp: '10:00 AM', isAnonymous: false },
    { id: 'm2', quoteId: quote.id, senderId: 'u4', senderName: 'Ground Team', senderRole: UserRole.OPERATOR, content: 'Hotel confirmed. Cab is arranged.', timestamp: '10:15 AM', isAnonymous: false },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if(!newMessage.trim()) return;
    const msg: Message = {
      id: Date.now().toString(),
      quoteId: quote.id,
      senderId: user.id,
      senderName: user.name,
      senderRole: user.role,
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isAnonymous: user.role === UserRole.AGENT // Agents are anonymous to Operators
    };
    setMessages([...messages, msg]);
    setNewMessage('');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 min-h-[80vh] flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 flex justify-between items-start">
        <div>
          <button onClick={onBack} className="text-sm text-gray-500 hover:text-brand-blue mb-2">← Back to Quotes</button>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-brand-blue">Quote #{quote.id}</h2>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${quote.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
              {quote.status}
            </span>
          </div>
          <p className="text-gray-500 mt-1">
            Travel Date: <span className="text-gray-800 font-semibold">{quote.travelDate}</span> • {quote.pax} Pax • {quote.destination}
          </p>
        </div>
        {!isOperator && (
          <div className="text-right">
            <p className="text-sm text-gray-500">Total Selling Price</p>
            <p className="text-3xl font-bold text-brand-blue">{formatCurrency(quote.sellingPrice)}</p>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Main Content: Itinerary */}
        <div className="flex-1 p-6 border-r border-gray-100 overflow-y-auto">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Map size={20} className="text-brand-gold"/> Itinerary</h3>
          <div className="space-y-6">
            {quote.itinerary.map((day) => (
              <div key={day.day} className="relative pl-8 border-l-2 border-brand-gold/30 pb-6">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-gold border-2 border-white"></div>
                <h4 className="font-bold text-gray-800">Day {day.day}: {day.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{day.description}</p>
                <div className="mt-2 flex gap-2">
                  {day.meals.map(m => <span key={m} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">{m}</span>)}
                </div>
              </div>
            ))}
          </div>

          {!isOperator && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2"><DollarSign size={18}/> Pricing Breakdown</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>Base Cost: <span className="font-semibold">{formatCurrency(quote.totalCost)}</span></div>
                <div>Markup: <span className="font-semibold text-green-600">+{formatCurrency(quote.markup)}</span></div>
                <div className="col-span-2 border-t border-gray-300 pt-2 font-bold text-lg flex justify-between">
                  <span>Final Price:</span>
                  <span>{formatCurrency(quote.sellingPrice)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar: Chat & Details */}
        <div className="w-full lg:w-96 bg-gray-50 flex flex-col">
          {/* Privacy Wall Warning */}
          {isOperator && (
            <div className="bg-brand-blue text-brand-gold p-3 text-xs text-center font-semibold">
              <EyeOff size={14} className="inline mr-1"/> RESTRICTED VIEW: Financials Hidden
            </div>
          )}

          {/* Chat */}
          <div className="flex-1 p-4 flex flex-col h-[500px]">
             <h3 className="font-bold text-gray-800 mb-4">Communication</h3>
             <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
               {messages.map((msg) => {
                 // Logic to hide Agent Name from Operator
                 let displayName = msg.senderName;
                 if (isOperator && msg.senderRole === UserRole.AGENT) {
                   displayName = "Agent (Partner)";
                 }
                 if (user.role === UserRole.AGENT && msg.senderRole === UserRole.OPERATOR) {
                   displayName = "Idea Holiday Ops"; // Agent doesn't see specific operator name usually
                 }

                 const isMe = msg.senderId === user.id;

                 return (
                   <div key={msg.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                     <div className={`max-w-[85%] p-3 rounded-lg text-sm ${isMe ? 'bg-brand-blue text-white' : 'bg-white border border-gray-200 text-gray-800'}`}>
                       <p className="font-bold text-xs mb-1 opacity-70">
                         {displayName} <span className="font-normal text-[10px] ml-1">{msg.timestamp}</span>
                       </p>
                       <p>{msg.content}</p>
                     </div>
                   </div>
                 );
               })}
             </div>
             <div className="flex gap-2">
               <input 
                  type="text" 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue"
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
               />
               <button onClick={handleSendMessage} className="bg-brand-gold text-brand-blue p-2 rounded-lg hover:bg-yellow-500">
                 <Send size={18} />
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuotesList: React.FC<{ user: User, onSelectQuote: (q: Quote) => void }> = ({ user, onSelectQuote }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="font-bold text-xl text-brand-blue">All Quotes</h2>
        <button className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-brand-blue/90">
          <Plus size={16} /> New Quote
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 font-heading">
            <tr>
              <th className="p-4">Quote ID</th>
              <th className="p-4">Client</th>
              <th className="p-4">Destination</th>
              <th className="p-4">Travel Date</th>
              {!shouldHideFinancials(user.role) && <th className="p-4">Amount</th>}
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {MOCK_QUOTES.map((q) => (
              <tr key={q.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-bold text-brand-blue">{q.id}</td>
                <td className="p-4">{q.clientName}</td>
                <td className="p-4">{q.destination}</td>
                <td className="p-4">{q.travelDate}</td>
                {!shouldHideFinancials(user.role) && <td className="p-4 font-semibold">{formatCurrency(q.sellingPrice)}</td>}
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${q.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {q.status}
                  </span>
                </td>
                <td className="p-4">
                  <button onClick={() => onSelectQuote(q)} className="text-brand-gold hover:text-brand-blue font-semibold text-xs border border-brand-gold px-3 py-1 rounded hover:bg-brand-gold/10">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const B2BPortal: React.FC<{ user: User, onLogout: () => void }> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);

  const renderContent = () => {
    if (activeTab === 'dashboard') return <DashboardHome role={user.role} />;
    
    if (activeTab === 'quotes') {
      if (selectedQuote) {
        return <QuoteDetail quote={selectedQuote} user={user} onBack={() => setSelectedQuote(null)} />;
      }
      return <QuotesList user={user} onSelectQuote={setSelectedQuote} />;
    }

    return <div className="p-10 text-center text-gray-500">Module Under Development</div>;
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <Sidebar role={user.role} activeTab={activeTab} onTabChange={(t) => { setActiveTab(t); setSelectedQuote(null); }} onLogout={onLogout} />
      <main className="ml-64 flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-brand-blue">Welcome back, {user.name}</h1>
            <p className="text-sm text-gray-500">Here is what's happening with your business today.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-right hidden md:block">
               <div className="text-sm font-bold text-brand-blue">{user.role} Account</div>
               <div className="text-xs text-gray-500">{user.email}</div>
             </div>
             <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center font-bold text-white shadow-lg">
               {user.name.charAt(0)}
             </div>
          </div>
        </header>
        {renderContent()}
      </main>
    </div>
  );
};