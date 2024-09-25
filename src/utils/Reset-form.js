export const resetForm = (formData, setFormState) => {
    const resetData = Object.keys(formData).reduce((acc, key) => {
      acc[key] = ''; // Set each field to an empty string
      return acc;
    }, {});
    console.log(resetData);
    setFormState(resetData); // Update the state with the reset data
  };


// Adjusted resetForm to accept an array of state setters
export const reset_form_individually = (...setters) => {
    setters.forEach(setter => setter(''));
    
  };
  