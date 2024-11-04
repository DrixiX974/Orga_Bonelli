import React from 'react';
import { Users, Box } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'members', label: 'Members', icon: Users },
    { id: 'chest1', label: 'Chest 1', icon: Box },
    { id: 'chest2', label: 'Chest 2', icon: Box },
    { id: 'chest3', label: 'Chest 3', icon: Box },
  ];

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">Inventory System</h1>
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}