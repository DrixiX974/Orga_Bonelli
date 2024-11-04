import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import type { Member } from '../types';

export function MembersList() {
  const [members, setMembers] = useState<Member[]>([
    {
      id: '1',
      name: 'John Doe',
      role: 'Admin',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMember, setNewMember] = useState({ name: '', role: '' });

  const addMember = () => {
    if (newMember.name && newMember.role) {
      setMembers([
        ...members,
        {
          id: Date.now().toString(),
          name: newMember.name,
          role: newMember.role,
          avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop`,
        },
      ]);
      setShowAddModal(false);
      setNewMember({ name: '', role: '' });
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Members</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          <span>Add Member</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-600 hover:text-blue-600">
                <Edit2 size={18} />
              </button>
              <button className="text-gray-600 hover:text-red-600">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-xl font-bold mb-4">Add New Member</h3>
            <input
              type="text"
              placeholder="Name"
              className="w-full mb-4 p-2 border rounded"
              value={newMember.name}
              onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Role"
              className="w-full mb-4 p-2 border rounded"
              value={newMember.role}
              onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={addMember}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}