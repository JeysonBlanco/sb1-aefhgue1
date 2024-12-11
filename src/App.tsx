import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CalculatorForm } from './components/CalculatorForm';
import { ResultsDisplay } from './components/ResultsDisplay';
import { InfoSection } from './components/InfoSection';
import { BlogLayout } from './components/BlogLayout';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import { calculateCubicaje } from './utils/calculations';
import { Dimensions, CalculationResult } from './types/calculator';

function App() {
  const [results, setResults] = useState<CalculationResult | null>(null);
  const [cargoType, setCargoType] = useState<string>('');

  const handleCalculate = (dimensions: Dimensions) => {
    setCargoType(dimensions.cargoType);
    setResults(calculateCubicaje(dimensions));
  };

  const handleBack = () => {
    setResults(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <BlogLayout>
              {!results && <InfoSection />}
              {results ? (
                <ResultsDisplay
                  results={results}
                  cargoType={cargoType}
                  onBack={handleBack}
                />
              ) : (
                <CalculatorForm onSubmit={handleCalculate} />
              )}
            </BlogLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;