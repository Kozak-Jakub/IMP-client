"use client";
import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";

const menuCategories = [
  {
    title: "Appetizers",
    description: "Start your meal with these delightful dishes",
    items: [
      {
        name: "Crispy Calamari",
        description:
          "Tender calamari rings, lightly breaded and served with marinara sauce",
        price: "295 Kč",
        image: "/blueprint.webp",
        spiciness: "Mild",
      },
      {
        name: "Buffalo Wings",
        description:
          "Crispy chicken wings tossed in spicy buffalo sauce, served with blue cheese dip",
        price: "245 Kč",
        image: "/blueprint.webp",
        spiciness: "Hot",
      },
      {
        name: "Bruschetta",
        description:
          "Grilled bread topped with fresh tomatoes, basil, and garlic",
        price: "185 Kč",
        image: "/blueprint.webp",
        dietary: "Vegetarian",
      },
      {
        name: "Shrimp Cocktail",
        description:
          "Chilled jumbo shrimp served with cocktail sauce and lemon",
        price: "325 Kč",
        image: "/blueprint.webp",
      },
    ],
  },
  {
    title: "Main Courses",
    description: "Expertly crafted entrées for every palate",
    items: [
      {
        name: "Ribeye Steak",
        description:
          "12oz premium ribeye, grilled to perfection, served with roasted potatoes",
        price: "795 Kč",
        image: "/blueprint.webp",
      },
      {
        name: "Grilled Salmon",
        description:
          "Fresh Atlantic salmon with lemon herb butter, served with seasonal vegetables",
        price: "595 Kč",
        image: "/blueprint.webp",
      },
      {
        name: "Chicken Marsala",
        description:
          "Pan-seared chicken breast in marsala wine sauce with mushrooms",
        price: "445 Kč",
        image: "/blueprint.webp",
      },
      {
        name: "Lobster Ravioli",
        description:
          "Handmade ravioli stuffed with lobster in a creamy vodka sauce",
        price: "525 Kč",
        image: "/blueprint.webp",
      },
    ],
  },
  {
    title: "From the Grill",
    description: "Premium cuts cooked to perfection",
    items: [
      {
        name: "Filet Mignon",
        description: "8oz center cut filet with red wine reduction",
        price: "895 Kč",
        image: "/blueprint.webp",
      },
      {
        name: "Lamb Chops",
        description:
          "New Zealand lamb chops with mint sauce and roasted vegetables",
        price: "745 Kč",
        image: "/blueprint.webp",
      },
      {
        name: "Pork Tomahawk",
        description: "20oz bone-in pork chop with apple bourbon glaze",
        price: "645 Kč",
        image: "/blueprint.webp",
      },
      {
        name: "Mixed Grill",
        description:
          "Combination of steak, chicken, and shrimp with chimichurri sauce",
        price: "945 Kč",
        image: "/blueprint.webp",
      },
    ],
  },
  {
    title: "Pasta & Risotto",
    description: "Classic Italian comfort dishes",
    items: [
      {
        name: "Spaghetti Carbonara",
        description:
          "Classic pasta with pancetta, egg, pecorino cheese, and black pepper",
        price: "345 Kč",
        image: "/blueprint.webp",
      },
      {
        name: "Seafood Risotto",
        description:
          "Creamy risotto with shrimp, scallops, and mussels in saffron broth",
        price: "495 Kč",
        image: "/blueprint.webp",
      },
      {
        name: "Beef Bolognese",
        description: "Pappardelle pasta with slow-cooked beef ragù",
        price: "385 Kč",
        image: "/blueprint.webp",
      },
      {
        name: "Truffle Mushroom Risotto",
        description:
          "Wild mushroom risotto finished with black truffle and parmesan",
        price: "445 Kč",
        image: "/blueprint.webp",
        dietary: "Vegetarian",
      },
    ],
  },
  {
    title: "Desserts",
    description: "Sweet endings to your perfect meal",
    items: [
      {
        name: "Tiramisu",
        description:
          "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
        price: "195 Kč",
        image: "/blueprint.webp",
      },
      {
        name: "Chocolate Lava Cake",
        description:
          "Warm chocolate cake with molten center, served with vanilla ice cream",
        price: "225 Kč",
        image: "/blueprint.webp",
      },
      {
        name: "New York Cheesecake",
        description: "Classic cheesecake with berry compote",
        price: "185 Kč",
        image: "/blueprint.webp",
      },
      {
        name: "Crème Brûlée",
        description: "Rich vanilla custard with caramelized sugar crust",
        price: "195 Kč",
        image: "/blueprint.webp",
      },
    ],
  },
];

const RestaurantPage = () => {
  return (
    <>
      <HeroSection
        eyebrow="Fine Dining Experience"
        title="Welcome to Our Restaurant"
        subtitle="Experience the best dining in town with our carefully crafted dishes"
        height="medium"
      />

      <section className="py-16 bg-background text-foreground">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading mb-4">
            Our Culinary Philosophy
          </h2>
          <p className="text-muted-foreground font-body max-w-3xl mx-auto">
            At our restaurant, we believe in using only the freshest ingredients
            to create dishes that not only taste great but also tell a story.
            Our menu is inspired by traditional recipes and modern culinary
            techniques, ensuring a delightful experience for every palate. Join
            us for a meal that celebrates the art of cooking and the joy of
            sharing good food with loved ones.
          </p>
        </div>
      </section>

      <section id="menu" className="py-24 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Menu</h2>
            <p className="text-muted-foreground">
              Discover our carefully curated selection
            </p>
          </div>

          <div className="space-y-20">
            {menuCategories.map((category) => (
              <div key={category.title} className="scroll-m-20">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-3xl font-semibold">{category.title}</h3>
                  <div className="h-[1px] flex-1 bg-border" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex gap-6 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={item.image}
                          alt={item.name}
                          layout="fill"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-xl">{item.name}</h4>
                            {item.dietary && (
                              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                                {item.dietary}
                              </span>
                            )}
                          </div>
                          <span className="text-lg font-bold text-primary">
                            {item.price}
                          </span>
                        </div>

                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RestaurantPage;
