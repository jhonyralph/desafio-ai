"use client";

import { useState } from "react";
import { createVehicle, deleteVehicle, updateVehicle } from "../api";
import type { CreateVehicleInput, Vehicle } from "../types";

const initialForm: CreateVehicleInput = {
  plate: "",
  brand: "",
  model: "",
  year: new Date().getFullYear(),
  color: "",
  active: true,
};

type VehiclesPageProps = {
  initialVehicles: Vehicle[];
};

export function VehiclesPage({ initialVehicles }: VehiclesPageProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles);
  const [form, setForm] = useState<CreateVehicleInput>(initialForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSaveVehicle() {
    setError(null);
    try {
      if (editingId) {
        const response = await updateVehicle(editingId, form);
        setVehicles((old) => old.map((item) => (item.id === editingId ? response.data : item)));
        setEditingId(null);
      } else {
        const response = await createVehicle(form);
        setVehicles((old) => [response.data, ...old]);
      }
      setForm(initialForm);
    } catch {
      setError("Nao foi possivel salvar o veiculo.");
    }
  }

  function startEditing(vehicle: Vehicle) {
    setEditingId(vehicle.id);
    setForm({
      plate: vehicle.plate,
      brand: vehicle.brand,
      model: vehicle.model,
      year: vehicle.year,
      color: vehicle.color,
      active: vehicle.active,
    });
  }

  async function handleDeleteVehicle(id: string) {
    setError(null);
    try {
      await deleteVehicle(id);
      setVehicles((old) => old.filter((vehicle) => vehicle.id !== id));
      if (editingId === id) {
        setEditingId(null);
        setForm(initialForm);
      }
    } catch {
      setError("Nao foi possivel remover o veiculo.");
    }
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-10">
      <h1 className="text-2xl font-semibold">Gerenciamento de Veiculos</h1>
      <p className="mt-2 text-sm text-zinc-600">Controle simples de veiculos em memoria.</p>

      <section className="mt-6 grid grid-cols-1 gap-2 rounded-md border p-4 md:grid-cols-6">
        <input
          className="rounded border px-2 py-1 text-sm"
          placeholder="Placa"
          value={form.plate}
          onChange={(event) => setForm((old) => ({ ...old, plate: event.target.value }))}
        />
        <input
          className="rounded border px-2 py-1 text-sm"
          placeholder="Marca"
          value={form.brand}
          onChange={(event) => setForm((old) => ({ ...old, brand: event.target.value }))}
        />
        <input
          className="rounded border px-2 py-1 text-sm"
          placeholder="Modelo"
          value={form.model}
          onChange={(event) => setForm((old) => ({ ...old, model: event.target.value }))}
        />
        <input
          className="rounded border px-2 py-1 text-sm"
          type="number"
          placeholder="Ano"
          value={form.year}
          onChange={(event) =>
            setForm((old) => ({ ...old, year: Number(event.target.value) || old.year }))
          }
        />
        <input
          className="rounded border px-2 py-1 text-sm"
          placeholder="Cor"
          value={form.color}
          onChange={(event) => setForm((old) => ({ ...old, color: event.target.value }))}
        />
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded bg-black px-3 py-1 text-sm text-white"
            onClick={() => void handleSaveVehicle()}
          >
            {editingId ? "Salvar" : "Criar"}
          </button>
          {editingId && (
            <button
              type="button"
              className="rounded border px-3 py-1 text-sm"
              onClick={() => {
                setEditingId(null);
                setForm(initialForm);
              }}
            >
              Cancelar
            </button>
          )}
        </div>
      </section>

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      <section className="mt-6 rounded-md border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-zinc-50 text-left">
              <th className="px-3 py-2">Placa</th>
              <th className="px-3 py-2">Marca</th>
              <th className="px-3 py-2">Modelo</th>
              <th className="px-3 py-2">Ano</th>
              <th className="px-3 py-2">Cor</th>
              <th className="px-3 py-2">Acoes</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border-b">
                <td className="px-3 py-2">{vehicle.plate}</td>
                <td className="px-3 py-2">{vehicle.brand}</td>
                <td className="px-3 py-2">{vehicle.model}</td>
                <td className="px-3 py-2">{vehicle.year}</td>
                <td className="px-3 py-2">{vehicle.color}</td>
                <td className="px-3 py-2">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="rounded border px-2 py-1 text-xs"
                      onClick={() => startEditing(vehicle)}
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="rounded border border-red-300 px-2 py-1 text-xs text-red-700"
                      onClick={() => void handleDeleteVehicle(vehicle.id)}
                    >
                      Remover
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {vehicles.length === 0 && (
              <tr>
                <td colSpan={6} className="px-3 py-4 text-center text-zinc-500">
                  Nenhum veiculo cadastrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}
