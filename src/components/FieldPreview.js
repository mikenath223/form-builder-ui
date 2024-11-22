const FieldPreview = ({ formFields }) => {
  return (
    <div className="p-4 bg-white shadow rounded mt-6">
      <h3 className="text-lg font-semibold mb-4">Form Preview</h3>
      <form>
        {formFields.map((field) => (
          <div key={field.id} className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
            {field.type === 'text' && (
              <input
                type="text"
                placeholder={field.properties.placeholder || ''}
                className="w-full p-2 border rounded"
              />
            )}
            {field.type === 'textarea' && (
              <textarea className="w-full p-2 border rounded"></textarea>
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default FieldPreview;
