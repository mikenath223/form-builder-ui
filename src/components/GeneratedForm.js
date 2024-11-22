export const GeneratedForm = ({ generatedFormFields = [] }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  console.log('generatedFormFields', generatedFormFields);

  return (
    generatedFormFields.length > 0 && (
      <div className="col-span-4 mt-6 p-4 bg-gray-50 rounded shadow min-w-[400px] mx-auto">
        <h3 className="text-lg font-semibold mb-4">Generated Form</h3>
        <form onSubmit={handleFormSubmit}>
          {generatedFormFields.map((field) => (
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
                <textarea
                  placeholder={field.properties.placeholder || ''}
                  className="w-full p-2 border rounded"
                />
              )}
              {field.type === 'checkbox' && (
                <input type="checkbox" className="p-2 border rounded" />
              )}
              {field.type === 'radio' && <input type="radio" className="p-2 border rounded" />}
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    )
  );
};
