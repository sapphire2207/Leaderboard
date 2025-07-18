import { useState, useEffect } from 'react';
import axios from 'axios';
import { Trophy } from 'lucide-react';
import ClaimPoints from './components/claimPoints';
import AddUser from './components/addUser';
import Header from './components/header';
import SuccessMessage from './components/successMessage';
import TopPerformers from './components/topPerformers';
import Leaderboard from './components/leaderboard';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [lastClaimed, setLastClaimed] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchLeaderboard(currentPage);
  }, [currentPage]);

  const fetchUsers = async () => {
    const res = await axios.get(`${BACKEND_URL}/api/users/getAllUsers`);
    setUsers(res.data);
  };

  const fetchLeaderboard = async (page = 1) => {
    const res = await axios.get(`${BACKEND_URL}/api/leaderboard/getLeaderboard?page=${page}&limit=${usersPerPage}`);
    setLeaderboard(res.data.users);
    setTotalUsers(res.data.total);
  };

  const handleClaim = async () => {
    if (!selectedUser) return alert('Please select a user.');
    const res = await axios.post(`${BACKEND_URL}/api/claim/claimPoints`, {
      userId: selectedUser,
    });
    setLastClaimed(res.data);
    setUsers(prev => prev.map(u => u._id === res.data.user._id ? res.data.user : u));
    fetchLeaderboard(currentPage);
  };

  const handleAddUser = async () => {
    if (!newUser) return;
    await axios.post(`${BACKEND_URL}/api/users/createUser`, { name: newUser });
    setNewUser('');
    fetchUsers();
    fetchLeaderboard(currentPage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Header />

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <ClaimPoints
            users={users}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            handleClaim={handleClaim}
          />
          <AddUser
            newUser={newUser}
            setNewUser={setNewUser}
            handleAddUser={handleAddUser}
          />
        </div>

        {/* Success Message */}
        <SuccessMessage lastClaimed={lastClaimed} />

        {/* Leaderboard */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Top Performers</h2>
          </div>
          <TopPerformers leaderboard={leaderboard} />
          <Leaderboard
            leaderboard={leaderboard}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={Math.ceil(totalUsers / usersPerPage)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
