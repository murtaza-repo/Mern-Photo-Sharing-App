"use strict";

var USER_ID_1 = 'xsZSJOgLjMVymGA7iKWILCVdW7l1';
var USER_ID_2 = 'rdFvLbP52hcNw4U52P4tH11bcfm2';
var USER_ID_3 = 'QGINHLRvspg3NEQKyQXNmMjeedm1';
module.exports.users = [{
  id: USER_ID_1,
  email: 'murtaza123@gmail.com',
  fullName: 'Murtaza Saifee'
}, {
  id: USER_ID_2,
  email: 'juzer123@gmail.com',
  fullName: 'Juzer Kadri'
}, {
  id: USER_ID_3,
  email: 'hunaid123@gmail.com',
  fullName: 'Hunaid Light'
}];
module.exports.photos = [{
  url: '/cat-photo.jpeg',
  title: 'My Cat',
  ownerId: USER_ID_1,
  sharedWith: [USER_ID_2]
}, {
  url: '/car-photo.jpg',
  title: 'My Car',
  ownerId: USER_ID_2,
  sharedWith: [USER_ID_1]
}];