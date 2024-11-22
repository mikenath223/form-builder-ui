const FieldEditor = ({ field, setField }) => {
  const updateLabel = (e) => {
    setField({ ...field, label: e.target.value });
  };

  const updateProperties = (e) => {
    const { name, value } = e.target;
    setField({
      ...field,
      properties: {
        ...field.properties,
        [name]: value
      }
    });
  };

  return (
    <div className="bg-gray-50 p-4 rounded shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Edit Field</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Label:</label>
        <input
          type="text"
          value={field.label}
          onChange={updateLabel}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm p-2"
        />
      </div>
      {field.type === 'text' && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Placeholder:</label>
          <input
            type="text"
            name="placeholder"
            value={field.properties.placeholder || ''}
            onChange={updateProperties}
            className="mt-1 block w-full rounded border-gray-300 shadow-sm"
          />
        </div>
      )}
    </div>
  );
};

export default FieldEditor;
