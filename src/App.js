import './App.css';
import FormBuilder from './components/FormBuilder';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Drag-and-Drop Form Builder</h1>
      <FormBuilder />
    </div>
  );
};

export default App;
