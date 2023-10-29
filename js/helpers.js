const notifications = document.getElementById("notifications");
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

const createNotification = (
  text,
  classes = ["fa-solid", "fa-check", "fa-lg"]
) => {
  const notifications_list = document.querySelectorAll(".notification");
  //Check if there is too much notifcations on screen
  if (notifications_list.length > 6) {
    return;
  }

  //create notification
  const notification = document.createElement("div");
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  const icon = document.createElement("i");
  icon.classList.add(...classes, "notification-icon");
  notification.appendChild(paragraph);
  notification.appendChild(icon);
  notification.classList.add("notification");
  notifications.appendChild(notification);

  //animate notifications up
  notifications_list.forEach((notification, index) => {
    if (index != notifications_list.length) {
      notification.animate(
        [
          {
            transform: `translateY(${
              -(notifications_list.length - index) * 120
            }px)`,
          },
        ],
        { duration: 300, iterations: 1, fill: "forwards" }
      );
    }
  });
  setTimeout(() => {
    notification.remove();
  }, 5000);
};
