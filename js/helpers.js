const id_section_to_number = (section) => {
  switch (section) {
    case "fresh-life":
      return 0;
    case "about-us":
      return 1;
    case "our-services":
      return 2;
    case "gallery":
      return 3;
    case "newsletter":
      return 4;
    case "blog":
      return 5;
    case "contact":
      return 6;
    default:
      return 0;
  }
};
