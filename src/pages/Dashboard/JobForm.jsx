import React, {useState} from 'react';
import API from '../../api/axiosConfig';
import { useNavigate } from 'react-router-dom';

export default function JobForm(){
  const [form, setForm] = useState({title:'', description:'', lastDate:'', companyName:''});
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post('/jobs', form);
      nav('/dashboard/jobs');
    } catch (err) {
      alert(err?.response?.data?.msg || 'Error');
    } finally { setLoading(false); }
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">Post a new job</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div><label className="block text-sm">Job Title</label><input required value={form.title} onChange={e=>setForm({...form,title:e.target.value})} className="w-full border p-2 rounded" /></div>
        <div><label className="block text-sm">Company Name</label><input required value={form.companyName} onChange={e=>setForm({...form,companyName:e.target.value})} className="w-full border p-2 rounded" /></div>
        <div><label className="block text-sm">Last Date for Application</label><input type="date" value={form.lastDate} onChange={e=>setForm({...form,lastDate:e.target.value})} className="w-full border p-2 rounded" /></div>
        <div><label className="block text-sm">Job Description</label><textarea required value={form.description} onChange={e=>setForm({...form,description:e.target.value})} className="w-full border p-2 rounded h-40" /></div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>{loading ? 'Posting...' : 'Submit'}</button>
      </form>
    </div>
  );
}
