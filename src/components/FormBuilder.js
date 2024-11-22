import React, { useState } from 'react';
import FieldEditor from './FieldEditor';
import { GeneratedForm } from './GeneratedForm';
import { FieldTypes } from './FieldTypes';

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);
  const [selectedField, setSelectedField] = useState(null);
  const [draggedFieldId, setDraggedFieldId] = useState(null);
  const [generatedFormFields, setGeneratedFormFields] = useState([]);

  const fieldTypes = [
    { type: 'text', label: 'Text Input' },
    { type: 'textarea', label: 'Text Area' },
    { type: 'checkbox', label: 'Checkbox' },
    { type: 'radio', label: 'Radio Button' }
  ];

  const handleDropNewField = (e) => {
    e.preventDefault();
    const fieldType = e.dataTransfer.getData('fieldType');
    if (!fieldType) return;

    const newField = {
      id: Date.now(),
      type: fieldType,
      label: `New ${fieldType}`,
      properties: {}
    };

    const updatedFields = [...formFields, newField];
    setFormFields(updatedFields);
    setSelectedField(newField);
  };

  const handleDragStartNewField = (type, e) => {
    e.dataTransfer.setData('fieldType', type);
    e.dataTransfer.setData('isNew', true);
  };

  const handleDragStartField = (fieldId, e) => {
    setDraggedFieldId(fieldId);
    e.dataTransfer.setData('isNew', false);
  };

  const handleDropReorderField = (e, targetFieldId) => {
    e.preventDefault();
    const isNew = e.dataTransfer.getData('isNew') === 'true';

    if (isNew) return;

    if (draggedFieldId) {
      const draggedIndex = formFields.findIndex((f) => f.id === draggedFieldId);
      const targetIndex = formFields.findIndex((f) => f.id === targetFieldId);

      if (draggedIndex !== -1 && targetIndex !== -1) {
        const reorderedFields = [...formFields];
        const [draggedField] = reorderedFields.splice(draggedIndex, 1);
        reorderedFields.splice(targetIndex, 0, draggedField);

        setFormFields(reorderedFields);
      }
    }
    setDraggedFieldId(null);
  };

  const onDragOver = (e) => e.preventDefault();

  // Generate the final form
  const handleGenerateForm = () => {
    setGeneratedFormFields([...formFields]);
  };

  return (
    <section className="container mx-auto mt-8">
      <div className="grid grid-cols-4 gap-4 w-11/12 bg-white shadow-lg rounded-lg p-6">
        <FieldTypes fieldTypes={fieldTypes} handleDragStartNewField={handleDragStartNewField} />

        <div
          className="col-span-2 bg-gray-50 border-dashed border-2 border-gray-300 p-4 rounded"
          onDrop={handleDropNewField}
          onDragOver={onDragOver}>
          <h3 className="text-lg font-semibold mb-4">Drop Fields Here</h3>
          {formFields.map((field) => (
            <div
              key={field.id}
              draggable
              onDragStart={(e) => handleDragStartField(field.id, e)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDropReorderField(e, field.id)}
              onClick={() => setSelectedField(field)}
              className={`p-3 mb-3 bg-white rounded shadow cursor-move ${
                selectedField?.id === field.id ? 'ring-2 ring-blue-500' : ''
              }`}>
              {field.label}
            </div>
          ))}
        </div>

        {selectedField && (
          <div className="col-span-1 pl-4">
            <FieldEditor
              field={selectedField}
              setField={(updatedField) => {
                setFormFields(formFields.map((f) => (f.id === updatedField.id ? updatedField : f)));
                setSelectedField(updatedField);
              }}
            />
          </div>
        )}
        <button
          onClick={handleGenerateForm}
          className="col-span-4 mt-4 bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600 mx-auto">
          Generate Form
        </button>
        <GeneratedForm generatedFormFields={generatedFormFields} />
      </div>
    </section>
  );
};

export default FormBuilder;
