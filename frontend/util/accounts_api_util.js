export const index = () => (
  $.ajax({
    method: 'GET',
    url: '/api/accounts'
  })
);

export const create = account => (
  $.ajax({
    method: 'POST',
    url: '/api/accounts',
    data: account,
    contentType: false,
    processData: false
  })
);
// export const create = formData => (
//   $.ajax({
//     method: 'POST',
//     url: '/api/accounts',
//     data: formData,
//     contentType: false,
//     processData: false
//   })
// );

export const show = id => (
  $.ajax({
    method: 'GET',
    url: `/api/accounts/${id}`
  })
);

export const update = (account, id) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/accounts/${id}`,
    data: account,
    contentType: false,
    processData: false
  })
);
// export const update = formData => (
//   $.ajax({
//     method: 'PATCH',
//     url: `/api/accounts/${formData.get([])}`,
//     data: formData,
//     contentType: false,
//     processData: false
//   })
// );

export const destroy = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/accounts/${id}`
  })
);
