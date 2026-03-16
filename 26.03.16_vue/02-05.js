function addContact(
  name,
  modile,
  home = '없음',
  address = '없음',
  email = '없음',
) {
  let str =
    `name=${name}, mobile=${mobile}, home=${home}` +
    `address=${address}, email=${email}`;
  console.log(str);
}
addContact('홍길종', '010-2345-6789');
addContact('이몽룡', '010-2345-6789', '02-2345-2345', '서울시');
