export const index = () => (
  $.ajax({
    method: 'GET',
    url: '/api/contacts'
  })
);

export const create = contact => (
  $.ajax({
    method: 'POST',
    url: '/api/contacts',
    data: contact,
    contentType: false,
    processData: false
  })
);

export const show = id => (
  $.ajax({
    method: 'GET',
    url: `/api/contacts/${id}`
  })
);

export const update = (contact, id) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/contacts/${id}`,
    data: contact,
    contentType: false,
    processData: false
  })
);

export const destroy = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/contacts/${id}`
  })
);
