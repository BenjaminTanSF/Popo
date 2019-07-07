export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const signup = formData => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: formData,
    contentType: false,
    processData: false
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
