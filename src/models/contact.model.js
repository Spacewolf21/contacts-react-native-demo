export default function Contact({ id = null,
                   address = {},
                   birthdate = null,
                   companyName = null,
                   emailAddress = null,
                   isFavorite = null,
                   largeImageURL = null,
                   name = null,
                   phone = {},
                   smallImageURL = null,
                } = {}) {
  function setAddress({ city = null,
                        country = null,
                        state = null,
                        street = null,
                        zipCode = null } = {}) {
    return {
      city,
      country,
      state,
      street,
      zipCode,
    };
  }

  function setPhone({ home = null, mobile = null, work = null } = {}) {
    return {
      home,
      mobile,
      work,
    };
  }

  return {
    id,
    address: setAddress(address),
    birthdate,
    companyName,
    emailAddress,
    isFavorite,
    largeImageURL,
    name,
    phone: setPhone(phone),
    smallImageURL,
  };
}
