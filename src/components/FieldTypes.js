export const FieldTypes = ({ fieldTypes = [], handleDragStartNewField }) => {
  return (
    <div className="col-span-1 border-r pr-4">
      <h3 className="text-lg font-semibold mb-4">Field Types</h3>
      {fieldTypes.map((field) => (
        <div
          key={field.type}
          draggable
          onDragStart={(e) => handleDragStartNewField(field.type, e)}
          className="bg-blue-100 text-blue-600 rounded p-2 mb-2 shadow hover:bg-blue-200 cursor-grab">
          {field.label}
        </div>
      ))}
    </div>
  );
};
