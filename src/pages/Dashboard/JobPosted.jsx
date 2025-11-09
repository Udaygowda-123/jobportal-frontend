import React, {useEffect, useState} from 'react';
import API from '../../api/axiosConfig';

export default function JobPosted(){
  const [jobs, setJobs] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});

  const fetchJobs = async()=> {
    try {
      const {data} = await API.get('/jobs');
      setJobs(data);
    } catch (err) { console.error(err); }
  };

  useEffect(()=>{ fetchJobs(); },[]);

  const handleDelete = async (id) => {
    if (!confirm('Delete this job?')) return;
    await API.delete(`/jobs/${id}`);
    setJobs(j => j.filter(x=>x._id !== id));
  };

  const startEdit = (job) => {
    setEditing(job._id);
    setForm({title: job.title, companyName: job.companyName, description: job.description, lastDate: job.lastDate?.split('T')[0]});
  };

  const saveEdit = async (id) => {
    await API.put(`/jobs/${id}`, form);
    setEditing(null);
    fetchJobs();
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">All Jobs</h3>
      <div className="space-y-4">
        {jobs.map(job => (
          <div key={job._id} className="bg-white border rounded shadow p-4 flex justify-between items-start">
            <div className="w-3/4">
              {editing === job._id ? (
                <>
                  <input className="w-full mb-2 border p-2" value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/>
                  <input className="w-full mb-2 border p-2" value={form.companyName} onChange={e=>setForm({...form,companyName:e.target.value})}/>
                  <textarea className="w-full mb-2 border p-2" value={form.description} onChange={e=>setForm({...form,description:e.target.value})}/>
                </>
              ) : (
                <>
                  <h4 className="font-semibold">{job.title}</h4>
                  <div className="text-sm text-gray-500">{job.companyName} • Last date: {job.lastDate ? new Date(job.lastDate).toLocaleDateString() : '—'}</div>
                  <p className="mt-2 text-gray-700">{job.description}</p>
                </>
              )}
            </div>
            <div className="flex flex-col gap-2 items-end">
              {editing === job._id ? (
                <>
                  <button onClick={()=>saveEdit(job._id)} className="bg-blue-600 text-white px-3 py-1 rounded">Save</button>
                  <button onClick={()=>setEditing(null)} className="border px-3 py-1 rounded">Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={()=>startEdit(job)} className="text-blue-600">Edit</button>
                  <button onClick={()=>handleDelete(job._id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                </>
              )}
            </div>
          </div>
        ))}
        {jobs.length === 0 && <div className="text-gray-500">No jobs posted yet.</div>}
      </div>
    </div>
  );
}
