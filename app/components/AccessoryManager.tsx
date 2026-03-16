'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Trash2, Plus, ImageMinus } from 'lucide-react';

export type AccessoryItem = {
  id: string;
  name: string;
  description: string;
  imageDataUrl?: string;
  createdAt: string;
};

const LOCAL_STORAGE_KEY = 'cloudybeads_accessories_v1';

function getStoredAccessories(): AccessoryItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as AccessoryItem[];
  } catch {
    return [];
  }
}

function setStoredAccessories(items: AccessoryItem[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
}

export default function AccessoryManager() {
  const [items, setItems] = useState<AccessoryItem[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    setItems(getStoredAccessories());
  }, []);

  useEffect(() => {
    setStoredAccessories(items);
  }, [items]);

  useEffect(() => {
    if (!imageFile) {
      setPreviewUrl(undefined);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(imageFile);

    return () => {
      reader.onload = null;
    };
  }, [imageFile]);

  const canAdd = useMemo(() => {
    return name.trim().length > 0 && description.trim().length > 0;
  }, [name, description]);

  const handleAdd = () => {
    if (!canAdd) return;

    const next: AccessoryItem = {
      id: crypto.randomUUID(),
      name: name.trim(),
      description: description.trim(),
      imageDataUrl: previewUrl,
      createdAt: new Date().toISOString(),
    };

    setItems((prev) => [next, ...prev]);
    setName('');
    setDescription('');
    setImageFile(null);
    setPreviewUrl(undefined);
  };

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section id="daftar-aksesoris" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Daftar <span className="text-pink-500">Aksesoris</span>
            </h2>
            <p className="text-slate-500 max-w-xl leading-relaxed">
              Tambahkan produk baru lengkap dengan foto dan deskripsi. Data akan tersimpan secara lokal di perangkatmu.
            </p>
          </div>

          <div className="w-full md:w-[420px] bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Tambah Aksesoris</h3>

            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Nama Produk</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Gelang Mutiara"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Deskripsi Singkat</span>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Contoh: Elegan dan cocok sebagai kado..."
                  className="mt-2 w-full min-h-[88px] resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Foto Produk (opsional)</span>
                <input
                  onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
                  type="file"
                  accept="image/*"
                  className="mt-2 w-full text-sm text-slate-700"
                />
                {previewUrl ? (
                  <div className="mt-3 relative rounded-xl overflow-hidden border border-slate-200">
                    <img src={previewUrl} alt="Preview" className="w-full h-40 object-cover" />
                    <button
                      type="button"
                      onClick={() => setImageFile(null)}
                      className="absolute top-2 right-2 bg-white/80 rounded-full p-2 shadow-sm hover:bg-white"
                      title="Hapus foto"
                    >
                      <ImageMinus className="w-4 h-4 text-slate-600" />
                    </button>
                  </div>
                ) : null}
              </label>

              <button
                type="button"
                onClick={handleAdd}
                disabled={!canAdd}
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-pink-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200 transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Plus className="w-4 h-4" />
                Tambahkan
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.length === 0 ? (
            <div className="md:col-span-3 rounded-3xl border border-dashed border-slate-200 p-12 text-center text-slate-500">
              <p className="text-lg font-semibold">Belum ada aksesoris</p>
              <p className="mt-2 text-sm">Gunakan form di atas untuk menambahkan produk baru.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="relative h-40 bg-slate-100">
                  {item.imageDataUrl ? (
                    <img src={item.imageDataUrl} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                      <div className="p-4 rounded-full bg-slate-100 border border-slate-200">
                        <ImageMinus className="w-8 h-8" />
                      </div>
                      <p className="mt-3 text-sm">Tanpa gambar</p>
                    </div>
                  )}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="absolute top-3 right-3 rounded-full bg-white/90 p-2 shadow-sm hover:bg-white"
                    title="Hapus produk"
                  >
                    <Trash2 className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  <p className="mt-4 text-xs text-slate-400">Ditambahkan: {new Date(item.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
