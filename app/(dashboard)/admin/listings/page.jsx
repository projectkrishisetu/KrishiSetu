"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ListingModerationPage() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListings() {
      setLoading(true);
      const { data, error } = await supabase.from("listings").select("*");

      if (!error && data) {
        setListings(data);
      }
      setLoading(false);
    }

    fetchListings();
  }, []);

  const handleStatusChange = async (listingId, newStatus) => {
    setListings((prev) =>
      prev.map((item) => (item.id === listingId ? { ...item, status: newStatus } : item))
    );

    await supabase
      .from("listings")
      .update({ status: newStatus })
      .eq("id", listingId);
  };

  if (loading) {
    return <div className="p-8 text-center text-slate-500">Loading marketplace listings...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Listing Moderation</h1>
        <p className="text-slate-600 mt-1">Manage produce listings posted by farmers.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        {listings.length === 0 ? (
          <div className="p-8 text-center text-slate-500">No listings found in database.</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase">
                <th className="p-4">Title & Category</th>
                <th className="p-4">Asking Price</th>
                <th className="p-4">Quantity Available</th>
                <th className="p-4">Location</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              {listings.map((item) => {
                const status = (item.status || "active").toLowerCase();
                return (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-semibold text-slate-900">
                      <div>{item.title}</div>
                      <div className="text-xs text-slate-500 font-normal">{item.category}</div>
                    </td>
                    <td className="p-4 font-bold text-emerald-700">
                      ₹{item.asking_price} / {item.unit}
                    </td>
                    <td className="p-4 text-slate-600">
                      {item.quantity_available} {item.unit}
                    </td>
                    <td className="p-4 text-slate-600">{item.location}</td>
                    <td className="p-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                          status === "active"
                            ? "bg-emerald-100 text-emerald-800"
                            : status === "sold"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="p-4 text-center space-x-2">
                      {status !== "active" && (
                        <button
                          onClick={() => handleStatusChange(item.id, "active")}
                          className="px-3 py-1.5 bg-emerald-600 text-white text-xs font-semibold rounded"
                        >
                          Set Active
                        </button>
                      )}
                      {status !== "archived" && (
                        <button
                          onClick={() => handleStatusChange(item.id, "archived")}
                          className="px-3 py-1.5 bg-rose-50 text-rose-600 text-xs font-semibold rounded border border-rose-200"
                        >
                          Archive
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}