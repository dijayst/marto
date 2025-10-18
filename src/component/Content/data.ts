
type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const services = [
  {
    id:1,
    title: "Automated Tracking",
    description:
      "Improve customer service and transparency, and reduce service calls with this secure, always-current order status and account statement.",
    image: "/images/eye.png"
  },
  {id:2,
    title: "Tracking API",
    description:
      "Start a new row for each order, then attach orders, invoices, shipping details, and payment acknowledgement.",
    image: "/images/monitor.png"
  },
  {id:3,
    title: "Ecommerce Integration",
    description:
      "We were not thinking about numbers then, but we knew something big can be built out of ecommerce integration.",
    image: "/images/shop.png"
  },
  {id:4,
    title: "Delivered In Time",
    description:
      "You can send all your Business Mail, Cheque & Draft, Photographs, Invitation Card, and any type of printed or hand written document to all over the world.",
    image: "/images/truck.png"
  }
];