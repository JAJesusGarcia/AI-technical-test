'use client';

// pages/patients.tsx
import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

// Sample patient data
const patientsData = [
  {
    id: 1,
    name: 'Jane Doe',
    age: 34,
    lastAnalysis: '2023-10-01',
    status: 'completed',
  },
  {
    id: 2,
    name: 'John Smith',
    age: 45,
    lastAnalysis: '2023-09-25',
    status: 'processing',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    age: 29,
    lastAnalysis: '2023-08-15',
    status: 'error',
  },
  // Add more sample data as needed
];

const Patients: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPatients, setFilteredPatients] = useState(patientsData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredPatients(
      patientsData.filter((patient) =>
        patient.name.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <Head>
        <title>Patients - AI Breast Cancer Detection</title>
        <meta
          name="description"
          content="Manage patients for AI-powered breast cancer detection"
        />
      </Head>

      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Pacientes
        </h1>
        <p className="text-lg text-gray-600">
          Manage and view patient details for AI-powered breast cancer
          detection.
        </p>
      </div>

      <br />

      <main>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 bg-white text-gray-800 border border-gray-300 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <table className="w-full bg-white text-gray-800 border-collapse shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Patient Name</th>
              <th className="p-2">ID</th>
              <th className="p-2">Age</th>
              <th className="p-2">Date of Last Analysis</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr
                key={patient.id}
                className="hover:bg-gray-100 transition-colors duration-300"
              >
                <td className="p-2">{patient.name}</td>
                <td className="p-2">{patient.id}</td>
                <td className="p-2">{patient.age}</td>
                <td className="p-2">{patient.lastAnalysis}</td>
                <td
                  className={`p-2 ${
                    patient.status === 'completed'
                      ? 'text-green-500'
                      : patient.status === 'processing'
                      ? 'text-yellow-500'
                      : 'text-red-500'
                  }`}
                >
                  {patient.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition-colors duration-300"
          onClick={openModal}
        >
          Add New Patient
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Add New Patient</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Age:</label>
                  <input
                    type="number"
                    name="age"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">ID:</label>
                  <input
                    type="text"
                    name="id"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition-colors duration-300"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="ml-2 px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 transition-colors duration-300"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Patients;
