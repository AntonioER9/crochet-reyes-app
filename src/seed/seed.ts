interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    category: 'small'|'medium'|'big'|'all'
}

type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats';

interface SeedData {
    products: SeedProduct[],
}




export const initialData: SeedData = {
    products: [
        {
            description: "Batman small.",
            images: [
                'batman-small-2.jpeg',
                'batman-small.jpeg',
            ],
            inStock: 7,
            price: 75,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "mens_chill_crew_neck_sweatshirt",
            type: 'shirts',
            tags: ['sweatshirt'],
            title: "Batman",
            category: 'small'
        },
        {
            description: "Hulk",
            images: [
                'hulk-small-2.jpeg',
                'hulk-small.jpeg',
            ],
            inStock: 5,
            price: 200,
            sizes: ['XS','S','M','XL','XXL'],
            slug: "men_quilted_shirt_jacket",
            type: 'shirts',
            tags: ['jacket'],
            title: "Hulk small",
            category: 'small'
        },
        
        {
            description: "Perrito pequeño",
            images: [
                'perrito-small-2.jpeg',
                'perrito-small.jpeg'
            ],
            inStock: 10,
            price: 130,
            sizes: ['S','M','L','XL','XXL'],
            slug: "men_raven_lightweight_zip_up_bomber_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Perrito",
            category: 'small'
        },

        {
            description: "Perro pequeño",
            images: [
                'perro-small.jpeg',
                'perro-small-2.jpeg',
            ],
            inStock: 50,
            price: 45,
            sizes: ['XS','S','M','L'],
            slug: "men_turbine_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Perro pequeño",
            category: 'small'
        },
        {
            description: "Superman pequeño",
            images: [
                'superman-small.jpeg',
                'superman-small-2.jpeg',
            ],
            inStock: 50,
            price: 40,
            sizes: ['M','L','XL','XXL'],
            slug: "men_turbine_short_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Superman pequeño",
            category: 'small'
        },
        {
            description: "Mujer Maravilla",
            images: [
                'wonder-woman-small-2.jpeg',
                'wonder-woman-small.jpeg',
            ],
            inStock: 0,
            price: 35,
            sizes: ['M','L','XL','XXL'],
            slug: "men_cybertruck_owl_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Mujer Maravilla",
            category: 'small'
        },
        {
            description: "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            images: [
                '1703767-00-A_0_2000.jpg',
                '1703767-00-A_1.jpg',
            ],
            inStock: 15,
            price: 35,
            sizes: ['S','M','L','XL'],
            slug: "men_solar_roof_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Solar Roof Tee",
            category: 'small'
        },
        {
            description: "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            images: [
                '1700280-00-A_0_2000.jpg',
                '1700280-00-A_1.jpg',
            ],
            inStock: 17,
            price: 35,
            sizes: ['XS','S','XL','XXL'],
            slug: "men_let_the_sun_shine_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Let the Sun Shine Tee",
            category: 'small'
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
            images: [
                '8764734-00-A_0_2000.jpg',
                '8764734-00-A_1.jpg',
            ],
            inStock: 12,
            price: 35,
            sizes: ['XS','S','M'],
            slug: "men_3d_large_wordmark_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's 3D Large Wordmark Tee",
            category: 'small'
        },
        {
            description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            images: [
                '7652426-00-A_0_2000.jpg',
                '7652426-00-A_1.jpg',
            ],
            inStock: 5,
            price: 35,
            sizes: ['XS','S'],
            slug: "men_3d_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's 3D T Logo Tee",
            category: 'small'
        },
        {
            description: "Designed for comfort and style in any category, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.",
            images: [
                '8528839-00-A_0_2000.jpg',
                '8528839-00-A_2.jpg',
            ],
            inStock: 2,
            price: 35,
            sizes: ['XS','S','M'],
            slug: "men_3d_small_wordmark_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men’s 3D Small Wordmark Tee",
            category: 'small'
        },
        {
            description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            images: [
                '1549268-00-A_0_2000.jpg',
                '1549268-00-A_2.jpg',
            ],
            inStock: 82,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_plaid_mode_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Plaid Mode Tee",
            category: 'small'
        },
        {
            description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environment.",
            images: [
                '9877034-00-A_0_2000.jpg',
                '9877034-00-A_2.jpg',
            ],
            inStock: 24,
            price: 35,
            sizes: ['XL','XXL'],
            slug: "men_powerwall_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Powerwall Tee",
            category: 'small'
        },
        {
            description: "Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.",
            images: [
                '1633802-00-A_0_2000.jpg',
                '1633802-00-A_2.jpg',
            ],
            inStock: 5,
            price: 30,
            sizes: ['XS','S','XXL'],
            slug: "men_battery_day_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Battery Day Tee",
            category: 'small'
        },
        {
            description: "Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            images: [
                '7654399-00-A_0_2000.jpg',
                '7654399-00-A_1.jpg',
            ],
            inStock: 150,
            price: 30,
            sizes: ['M','L'],
            slug: "men_cybertruck_bulletproof_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men’s Cybertruck Bulletproof Tee",
            category: 'small'
        },
        {
            description: "Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.",
            images: [
                '7652410-00-A_0.jpg',
                '7652410-00-A_1_2000.jpg',
            ],
            inStock: 10,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_haha_yes_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Haha Yes Tee",
            category: 'small'
        },
        {
            description: "Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.",
            images: [
                '8764600-00-A_0_2000.jpg',
                '8764600-00-A_2.jpg',
            ],
            inStock: 34,
            price: 35,
            sizes: ['XS','S','M','L'],
            slug: "men_s3xy_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's S3XY Tee",
            category: 'small'
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.",
            images: [
                '8764813-00-A_0_2000.jpg',
                '8764813-00-A_1.jpg',
            ],
            inStock: 15,
            price: 40,
            sizes: ['XL','XXL'],
            slug: "men_3d_wordmark_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's 3D Wordmark Long Sleeve Tee",
            category: 'small'
        },
        {
            description: "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
            images: [
                '8529198-00-A_0_2000.jpg',
                '8529198-00-A_1.jpg',
            ],
            inStock: 12,
            price: 40,
            sizes: ['XS','XXL'],
            slug: "men_3d_t_logo_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's 3D T Logo Long Sleeve Tee",
            category: 'small'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                '1740245-00-A_0_2000.jpg',
                '1740245-00-A_1.jpg',
            ],
            inStock: 10,
            price: 115,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "men_raven_lightweight_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Men's Raven Lightweight Hoodie",
            category: 'small'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The all hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1740051-00-A_0_2000.jpg',
                '1740051-00-A_1.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "chill_pullover_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Chill Pullover Hoodie",
            category: 'all'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1741111-00-A_0_2000.jpg',
                '1741111-00-A_1.jpg',
            ],
            inStock: 100,
            price: 85,
            sizes: ['XS','L','XL','XXL'],
            slug: "men_chill_full_zip_hoodie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Chill Full Zip Hoodie",
            category: 'small'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1740140-00-A_0_2000.jpg',
                '1740140-00-A_1.jpg',
            ],
            inStock: 7,
            price: 85,
            sizes: ['XS','S','M'],
            slug: "men_chill_quarter_zip_pullover_-_gray",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Chill Quarter Zip Pullover - Gray",
            category: 'small'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1740145-00-A_2_2000.jpg',
                '1740145-00-A_1.jpg',
            ],
            inStock: 15,
            price: 85,
            sizes: ['XS','S','M','L'],
            slug: "men_chill_quarter_zip_pullover_-_white",
            type: 'shirts',
            tags: ['shirt'],
            title: "Men's Chill Quarter Zip Pullover - White",
            category: 'small'
        },
        {
            description: "The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a all style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.",
            images: [
                '8529107-00-A_0_2000.jpg',
                '8529107-00-A_1.jpg',
            ],
            inStock: 15,
            price: 70,
            sizes: ['XS','S','XL','XXL'],
            slug: "3d_large_wordmark_pullover_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "3D Large Wordmark Pullover Hoodie",
            category: 'all'
        },
        {
            description: "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
            images: [
                '7654420-00-A_0_2000.jpg',
                '7654420-00-A_1_2000.jpg',
            ],
            inStock: 13,
            price: 60,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "cybertruck_graffiti_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Cybertruck Graffiti Hoodie",
            category: 'all'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
                '1657932-00-A_0_2000.jpg',
                '1657932-00-A_1.jpg',
            ],
            inStock: 11,
            price: 30,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "relaxed_t_logo_hat",
            type: 'hats',
            tags: ['hats'],
            title: "Relaxed T Logo Hat",
            category: 'all'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
                '1740417-00-A_0_2000.jpg',
                '1740417-00-A_1.jpg',
            ],
            inStock: 13,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "thermal_cuffed_beanie",
            type: 'hats',
            tags: ['hats'],
            title: "Thermal Cuffed Beanie",
            category: 'all'
        },
        {
            description: "Hermione mediana",
            images: [
                'hermione-medium-2.jpeg',
                'hermione-medium.jpeg',
            ],
            inStock: 85,
            price: 225,
            sizes: ['XS','S','M'],
            slug: "women_cropped_puffer_jacket",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Hermione mediana",
            category: 'medium'
        },
        {
            description: "Hulk mediano",
            images: [
                'hulk-medium-2.jpeg',
                'hulk-medium-2.jpeg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','XXL'],
            slug: "women_chill_half_zip_cropped_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Hulk mediano",
            category: 'medium'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            images: [
                '1740260-00-A_0_2000.jpg',
                '1740260-00-A_1.jpg',
            ],
            inStock: 9,
            price: 110,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_raven_slouchy_crew_sweatshirt",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Women's Raven Slouchy Crew Sweatshirt",
            category: 'medium'
        },
        {
            description: "Kiko mediano",
            images: [
                'kiko-medium-2.jpeg',
                'kiko-medium.jpeg',
            ],
            inStock: 10,
            price: 45,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_turbine_cropped_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kiko mediano",
            category: 'medium'
        },
        {
            description: "Mona mediana",
            images: [
                'mona-medium.jpeg',
                'mona-medium-2.jpeg',
            ],
            inStock: 0,
            price: 40,
            sizes: ['XS','S'],
            slug: "women_turbine_cropped_short_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Mona mediana",
            category: 'medium'
        },
        {
            description: "Monita mediana",
            images: [
                'monita-medium.jpeg',
                'monita-medium-2.jpeg',
            ],
            inStock: 30,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_t_logo_short_sleeve_scoop_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Monita mediana",
            category: 'medium'
        },
        {
            description: "Mono mediano",
            images: [
                'mono-medium-2.jpeg',
                'mono-medium.jpeg',
            ],
            inStock: 16,
            price: 40,
            sizes: ['XS','S','L','XL','XXL'],
            slug: "women_t_logo_long_sleeve_scoop_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Mono mediano",
            category: 'medium'
        },
        {
            description: "Pocoyo mediano",
            images: [
                'pocoyo-medium-2.jpeg',
                'pocoyo-medium.jpeg',
            ],
            inStock: 18,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_small_wordmark_short_sleeve_v-neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Pocoyo mediano",
            category: 'medium'
        },
        {
            description: "Designed for style and comfort, the Women's Large Wordmark Short Sleeve Crew Neck Tee features a tonal 3D silicone-printed wordmark across the chest. Made of 100% Peruvian pima cotton.",
            images: [
                '8765115-00-A_0_2000.jpg',
                '8765115-00-A_1.jpg',
            ],
            inStock: 5,
            price: 35,
            sizes: ['XL','XXL'],
            slug: "women_large_wordmark_short_sleeve_crew_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Large Wordmark Short Sleeve Crew Neck Tee",
            category: 'medium'
        },
        {
            description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            images: [
                '1549275-00-A_0_2000.jpg',
                '1549275-00-A_1.jpg',
            ],
            inStock: 16,
            price: 35,
            sizes: ['S','M'],
            slug: "women_plaid_mode_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Plaid Mode Tee",
            category: 'medium'
        },
        {
            description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any",
            images: [
                '9877040-00-A_0_2000.jpg',
                '9877040-00-A_1.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_powerwall_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women’s Powerwall Tee",
            category: 'medium'
        },
        {
            description: "Fully customized and uniquely styled, the Women's Corp Jacket features a silicone-printed 'T' logo on the left chest and prominent Tesla wordmark across the back.",
            images: [
                '5645680-00-A_0_2000.jpg',
                '5645680-00-A_3.jpg',
            ],
            inStock: 3,
            price: 90,
            sizes: ['M','L','XL','XXL'],
            slug: "women_corp_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Corp Jacket",
            category: 'medium'
        },
        {
            description: "Introducing the Tesla Raven Collection. The Women's Raven Joggers have a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The joggers feature a subtle thermoplastic polyurethane Tesla wordmark and T logo and a french terry interior for a cozy look and feel in every season. Pair them with your Raven Slouchy Crew Sweatshirt, Raven Lightweight Zip Up Jacket or other favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            images: [
                '1740270-00-A_0_2000.jpg',
                '1740270-00-A_1.jpg',
            ],
            inStock: 162,
            price: 100,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_raven_joggers",
            type: 'shirts',
            tags: ['shirt'],
            title: "Women's Raven Joggers",
            category: 'medium'
        },
        {
            description: "Chapulin grande",
            images: [
                'chapulin-big.jpeg',
                'chapulin-big-2.jpeg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_cybertruck_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Chapulin grande",
            category: 'big'
        },
        {
            description: "Frozen grande",
            images: [
                'frozen-big-2.jpeg',
                'frozen-big.jpeg',
            ],
            inStock: 0,
            price: 25,
            sizes: ['XS','S','M'],
            slug: "kids_scribble_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Frozen grande",
            category: 'big'
        },
        {
            description: "Groot grande",
            images: [
                'groot-big-2.jpeg',
                'groot-big.jpeg',
            ],
            inStock: 10,
            price: 25,
            sizes: ['XS','S','M'],
            slug: "kids_cybertruck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Groot grande",
            category: 'big'
        },
        {
            description: "Hulk grande",
            images: [
                'hulk-big-2.jpeg',
                'hulk-big.jpeg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_racing_stripe_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Hulk grande",
            category: 'big'
        },
        {
            description: "Kiko grande",
            images: [
                'kiko-big-2.jpeg',
                'kiko-big.jpeg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_3d_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kiko grande",
            category: 'big'
        },
        {
            description: "Mona grande",
            images: [
                'mona-big-2.jpeg',
                'mona-big.jpeg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_checkered_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Checkered Tee",
            category: 'big'
        },
        {
            description: "For the future space traveler with discerning taste, a soft, cotton onesie with snap closure bottom. Clear labeling provided in case of contact with a new spacefaring civilization. 100% Cotton. Made in Peru",
            images: [
                '1473809-00-A_1_2000.jpg',
                '1473809-00-A_alt.jpg',
            ],
            inStock: 16,
            price: 25,
            sizes: ['XS','S'],
            slug: "made_on_earth_by_humans_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Made on Earth by Humans Onesie",
            category: 'big'
        },
        {
            description: "The Kids Scribble T Logo Onesie is made from 100% Peruvian cotton and features a Tesla T sketched logo for every little artist to wear.",
            images: [
                '8529387-00-A_0_2000.jpg',
                '8529387-00-A_1.jpg',
            ],
            inStock: 0,
            price: 30,
            sizes: ['XS','S'],
            slug: "scribble_t_logo_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Scribble T Logo Onesie",
            category: 'big'
        },
        {
            description: "Show your commitment to sustainable energy with this cheeky onesie for your young one. Note: Does not prevent emissions. 100% Cotton. Made in Peru.",
            images: [
                '1473834-00-A_2_2000.jpg',
                '1473829-00-A_2_2000.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S'],
            slug: "zero_emissions_(almost)_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Zero Emissions (Almost) Onesie",
            category: 'big'
        },
        {
            description: "Wear your Kids Cyberquad Bomber Jacket during your adventures on Cyberquad for Kids. The bomber jacket features a graffiti-style illustration of our Cyberquad silhouette and wordmark. With three zippered pockets and our signature T logo and Tesla wordmark printed along the sleeves, Kids Cyberquad Bomber Jacket is perfect for wherever the trail takes you. Made from 60% cotton and 40% polyester.",
            images: [
                '1742702-00-A_0_2000.jpg',
                '1742702-00-A_1.jpg',
            ],
            inStock: 10,
            price: 65,
            sizes: ['XS','S','M'],
            slug: "kids_cyberquad_bomber_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Cyberquad Bomber Jacket",
            category: 'big'
        },
        {
            description: "Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.",
            images: [
                '1506211-00-A_0_2000.jpg',
                '1506211-00-A_1_2000.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "kids_corp_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "Kids Corp Jacket",
            category: 'big'
        },
    ]
}