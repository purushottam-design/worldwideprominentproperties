"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

export default function EMICalculatorPage() {
  const [amount, setAmount] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const [tenure, setTenure] = useState<string>("");
  const [emi, setEmi] = useState<number | null>(null);

  const handleCalculate = () => {
    const P = parseFloat(amount || "0");
    const annualRate = parseFloat(rate || "0");
    const years = parseFloat(tenure || "0");
    if (!P || !annualRate || !years) {
      setEmi(null);
      return;
    }
    const r = annualRate / 12 / 100;
    const n = years * 12;
    const value = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(Number.isFinite(value) ? value : null);
  };

  return (
    <section className="min-h-[70vh] bg-black pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white shadow-sm border border-[var(--color-gold)]/20 mb-5">
            <Calculator className="text-[var(--color-gold)]" size={18} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-dark)]">
              EMI / Loan Calculator
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-cream)] heading-premium mb-3">
            Estimate Your Monthly EMI
          </h1>
          <p className="text-gray-600">
            Enter your loan details to quickly see an approximate monthly instalment.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-white px-6 md:px-10 py-8 space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-dark)]">
                Loan Amount (₹)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="e.g. 4500000"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/60 focus:border-[var(--color-gold)]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-dark)]">
                Interest Rate (% p.a.)
              </label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="e.g. 8.5"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/60 focus:border-[var(--color-gold)]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-dark)]">
                Tenure (years)
              </label>
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                placeholder="e.g. 20"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/60 focus:border-[var(--color-gold)]"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <button
              onClick={handleCalculate}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-[var(--color-dark)] font-semibold tracking-wide text-sm hover:shadow-[0_10px_25px_rgba(212,175,55,0.35)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Calculate EMI
            </button>
            <p className="text-xs text-gray-500 text-center md:text-right">
              This calculator provides an approximate EMI value for guidance only. Exact figures may vary as per bank.
            </p>
          </div>

          {emi !== null && (
            <div className="mt-4 rounded-2xl bg-[var(--color-cream)] px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                  Estimated Monthly EMI
                </p>
                <p className="text-2xl md:text-3xl font-bold text-[var(--color-dark)] mt-1">
                  ₹ {Number(emi.toFixed(0)).toLocaleString("en-IN")}
                </p>
              </div>
              <div className="text-xs text-gray-500 max-w-xs">
                Based on the values entered above for principal, interest rate and tenure in years.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

