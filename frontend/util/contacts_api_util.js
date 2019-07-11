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
    data: { contact }
  })
);

export const show = id => (
  $.ajax({
    method: 'GET',
    url: `/api/contacts/${id}`
  })
);

export const update = contact => (
  $.ajax({
    method: 'PATCH',
    url: `/api/contacts/${contact.id}`,
    data: { contact }
  })
);

export const destroy = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/contacts/${id}`
  })
);
