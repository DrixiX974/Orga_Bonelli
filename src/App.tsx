import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MembersList } from './components/MembersList';
import { ChestView } from './components/ChestView';

function App() {
  const [activeTab, setActiveTab] = useState('members');

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1">
        {activeTab === 'members' ? (
          <MembersList />
        ) : (
          <ChestView chestId={activeTab} />
        )}
      </main>
    </div>
  );
}

export default App;