const updateObject = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties,
});

export default updateObject;

export const sortById = (arr) => {
  return arr.sort((a, b) => (a.id < b.id ? 1 : -1));
};

export const msToElapsedTime = (timeStamp) => {
  const duration = new Date() - new Date(timeStamp);

  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  const months = Math.floor(duration / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(duration / (1000 * 60 * 60 * 24 * 30 * 12));

  if (years > 0) {
    return `${years} years ago`;
  }
  if (months > 0) {
    return `${months} months ago`;
  }
  if (days > 0) {
    return `${days} days ago`;
  }
  if (hours > 0) {
    return `${hours} hours ago`;
  }
  if (minutes > 0) {
    return `${minutes} minutes ago`;
  }
  return 'A few seconds ago';
};

export const clearInputFile = (f) => {
  if (f.value) {
    try {
      // eslint-disable-next-line no-param-reassign
      f.value = '';
      // eslint-disable-next-line no-empty
    } catch (err) {}
    if (f.value) {
      const form = document.createElement('form');
      const ref = f.nextSibling;
      form.appendChild(f);
      form.reset();
      ref.parentNode.insertBefore(f, ref);
    }
  }
};

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};
