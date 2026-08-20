const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Product = require("./models/Product");

dotenv.config();

const products = [
    {
        productId: 1,
        name: "Air Jordan 1 Retro High OG 'Pine Green'",
        category: "high-tops",
        categoryLabel: "High-Tops",
        badge: "Trending",
        badgeType: "trending",
        color: "Pine Green / White / Metallic",
        bestFor: "Streetwear, casual drip, hype events",
        price: 14999,
        originalPrice: 17999,
        rating: 4.9,
        reviews: 142,
        image: "imagess/sneaker 1.jpeg",
        description: "The Air Jordan 1 Retro High OG 'Pine Green' brings a vibrant emerald metallic shine to the iconic silhouette. Crafted with premium full-grain leather, padded ankle collar, and Nike Air encapsulation for legendary comfort."
    },

    {
        productId: 2,
        name: "Air Jordan 1 High OG 'Washed Heritage'",
        category: "high-tops",
        categoryLabel: "High-Tops",
        badge: "Bestseller",
        badgeType: "bestseller",
        color: "Atmosphere Grey / Sail / White",
        bestFor: "Clean minimal fits, everyday luxury",
        price: 13499,
        originalPrice: 15999,
        rating: 4.8,
        reviews: 98,
        image: "imagess/sneaker 2.jpeg",
        description: "Featuring soft washed suede overlays paired with crisp white leather underlays and a vintage sail midsole. Subtle, sophisticated, and effortlessly versatile for any modern wardrobe."
    },

    {
        productId: 3,
        name: "Air Jordan 1 Mid 'Chicago Black Toe'",
        category: "mids",
        categoryLabel: "Mids",
        badge: "Hot Drop",
        badgeType: "hot",
        color: "Gym Red / Black / White",
        bestFor: "Basketball legacy, daily rotation",
        price: 11999,
        originalPrice: 13999,
        rating: 4.9,
        reviews: 215,
        image: "imagess/sneaker 3.jpeg",
        description: "A tribute to Chicago basketball royalty. Combining the timeless black toe color-blocking with vibrant Gym Red ankle collars and swoosh detailing for quintessential Jordan style."
    },

    {
        productId: 4,
        name: "Air Jordan 1 High OG 'Across The Spider-Verse'",
        category: "limited",
        categoryLabel: "Limited Edition",
        badge: "Rare Grail",
        badgeType: "grail",
        color: "University Red / Black / Multi",
        bestFor: "Collectors, comic cons, statement outfits",
        price: 18999,
        originalPrice: 22999,
        rating: 5.0,
        reviews: 320,
        image: "imagess/sneaker 4.jpeg",
        description: "Inspired by Miles Morales and the multiverse animation style. Features multi-textured patchwork leather, comic halftone dot graphics, and vibrant red accents that pop from every angle."
    },

    {
        productId: 5,
        name: "Air Jordan 1 Low 'University Blue'",
        category: "lows",
        categoryLabel: "Lows",
        badge: "Popular",
        badgeType: "popular",
        color: "UNC Blue / Black / White",
        bestFor: "Summer fits, skate & campus strolls",
        price: 9999,
        originalPrice: 11499,
        rating: 4.8,
        reviews: 184,
        image: "imagess/sneaker 5.jpeg",
        description: "The low-cut classic in the celebrated UNC Tar Heels colorway. Crisp premium leather base paired with obsidian black panels and powder blue accents for effortless summer styling."
    },

    {
        productId: 6,
        name: "Air Jordan 1 Zoom CMFT 2 'Pale Vanilla'",
        category: "high-tops",
        categoryLabel: "High-Tops",
        badge: "Ultra Comfort",
        badgeType: "comfort",
        color: "Sail / Gold / Pale Vanilla",
        bestFor: "All-day walking, plush comfort",
        price: 12499,
        originalPrice: 14999,
        rating: 4.7,
        reviews: 86,
        image: "imagess/sneaker 6.jpeg",
        description: "Engineered with Formula 23 foam and Zoom Air cushioning for next-level step-in comfort. Soft textured suede and cut-out metallic gold swoosh deliver a refined artisan aesthetic."
    },

    {
        productId: 7,
        name: "Air Jordan 1 Low Craft 'Inside Out'",
        category: "lows",
        categoryLabel: "Lows",
        badge: "Deconstructed",
        badgeType: "craft",
        color: "Taupe Haze / Celestial Gold / Grey",
        bestFor: "Artsy streetwear, relaxed chic",
        price: 10499,
        originalPrice: 12999,
        rating: 4.9,
        reviews: 112,
        image: "imagess/sneaker  7.jpeg",
        description: "An inverted deconstructed masterpiece featuring exposed foam edges, inverted toe box overlays, and delicate orange accent stitching on the stitched swoosh."
    },

    {
        productId: 8,
        name: "Air Jordan 1 High OG 'Dark Iris Court Purple'",
        category: "high-tops",
        categoryLabel: "High-Tops",
        badge: "Exclusive",
        badgeType: "exclusive",
        color: "Dark Iris Purple / Black / White",
        bestFor: "Night outs, monochrome contrast fits",
        price: 13999,
        originalPrice: 16499,
        rating: 4.8,
        reviews: 129,
        image: "imagess/sneaker 8.jpeg",
        description: "Regal court purple leather combined with jet black overlays and a speckled eco-midsole. A dark-mode sneakerhead essential built with durable craftsmanship."
    },

    {
        productId: 9,
        name: "Air Jordan 1 Mid SE 'Lucky Green Desert'",
        category: "mids",
        categoryLabel: "Mids",
        badge: "Vibrant",
        badgeType: "vibrant",
        color: "Lucky Green / Desert Ochre / Coral",
        bestFor: "Festival wear, color pop outfits",
        price: 11499,
        originalPrice: 13499,
        rating: 4.7,
        reviews: 79,
        image: "imagess/sneaker 9.jpeg",
        description: "Bold earthy desert ochre suede blended with lush green leather and neon coral swoosh accents. A show-stopping color palette that elevates any sneaker rotation."
    },

    {
        productId: 10,
        name: "Air Jordan 1 Zoom CMFT 2 'Palomino Melon'",
        category: "high-tops",
        categoryLabel: "High-Tops",
        badge: "New Season",
        badgeType: "new",
        color: "Palomino / Melon Tint / Black",
        bestFor: "Autumn streetwear, warm tone fits",
        price: 12999,
        originalPrice: 15499,
        rating: 4.8,
        reviews: 94,
        image: "imagess/sneaker 10.jpeg",
        description: "Luxurious palomino tan suede coupled with warm melon tint collar accents and responsive Zoom Air cushioning for unmatched everyday walkability."
    },

    {
        productId: 11,
        name: "Air Jordan 1 High OG 'Tiffany Aqua Dream'",
        category: "high-tops",
        categoryLabel: "High-Tops",
        badge: "Grail Drop",
        badgeType: "grail",
        color: "Tiffany Aqua / Pure White",
        bestFor: "Clean aesthetic, luxury streetwear",
        price: 15499,
        originalPrice: 18999,
        rating: 4.9,
        reviews: 164,
        image: "imagess/sneaker 11.jpeg",
        description: "Crisp white leather paired with electrifying Tiffany turquoise overlays and pristine wings branding. A fresh, icy silhouette that commands instant attention."
    },

    {
        productId: 12,
        name: "Air Jordan 1 Retro High OG 'White Cement'",
        category: "limited",
        categoryLabel: "Limited Edition",
        badge: "Heritage",
        badgeType: "heritage",
        color: "Tech Grey / Elephant / Black",
        bestFor: "Heritage collectors, iconic OG style",
        price: 17999,
        originalPrice: 20999,
        rating: 5.0,
        reviews: 280,
        image: "imagess/sneaker 12.jpeg",
        description: "Borrowing the legendary elephant print from the Air Jordan 3, this special release features textured cement overlays across a smooth white leather canvas."
    }
];

const seedProducts = async () => {
    try {
        await connectDB();

        await Product.deleteMany();

        await Product.insertMany(products);

        console.log("12 products inserted successfully!");

        process.exit();
    } catch (error) {
        console.error("Error inserting products:", error.message);

        process.exit(1);
    }
};

seedProducts();