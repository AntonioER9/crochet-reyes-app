interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    // sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    // type: ValidTypes;
    size: ValidSizes;
}

// type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
type ValidSizes = 'small' | 'medium' | 'big' | 'all';
// type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats';

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
            // sizes: ['XS','S','M','L','XL','XXL'],
            slug: "mens_chill_crew_neck_sweatshirt",
            // type: 'shirts',
            tags: ['sweatshirt'],
            title: "Batman",
            size: 'small'
        },
        {
            description: "Hulk",
            images: [
                'hulk-small-2.jpeg',
                'hulk-small.jpeg',
            ],
            inStock: 5,
            price: 200,
            // sizes: ['XS','S','M','XL','XXL'],
            slug: "men_quilted_shirt_jacket",
            // type: 'shirts',
            tags: ['jacket'],
            title: "Hulk small",
            size: 'small'
        },

        {
            description: "Perrito pequeño",
            images: [
                'perrito-small-2.jpeg',
                'perrito-small.jpeg'
            ],
            inStock: 10,
            price: 130,
            // sizes: ['S','M','L','XL','XXL'],
            slug: "men_raven_lightweight_zip_up_bomber_jacket",
            // type: 'shirts',
            tags: ['shirt'],
            title: "Perrito",
            size: 'small'
        },

        {
            description: "Perro pequeño",
            images: [
                'perro-small.jpeg',
                'perro-small-2.jpeg',
            ],
            inStock: 50,
            price: 45,
            // sizes: ['XS','S','M','L'],
            slug: "men_turbine_long_sleeve_tee",
            // type: 'shirts',
            tags: ['shirt'],
            title: "Perro pequeño",
            size: 'small'
        },
        {
            description: "Superman pequeño",
            images: [
                'superman-small.jpeg',
                'superman-small-2.jpeg',
            ],
            inStock: 50,
            price: 40,
            // sizes: ['M','L','XL','XXL'],
            slug: "men_turbine_short_sleeve_tee",
            // type: 'shirts',
            tags: ['shirt'],
            title: "Superman pequeño",
            size: 'small'
        },
        {
            description: "Mujer Maravilla",
            images: [
                'wonder-woman-small-2.jpeg',
                'wonder-woman-small.jpeg',
            ],
            inStock: 0,
            price: 35,
            // sizes: ['M','L','XL','XXL'],
            slug: "men_cybertruck_owl_tee",
            // type: 'shirts',
            tags: ['shirt'],
            title: "Mujer Maravilla",
            size: 'small'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The all hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1473809-00-A_1_2000.jpg',
                '1473809-00-A_alt.jpg',
            ],
            inStock: 10,
            price: 130,
            // sizes: ['XS','S','M','L','XL','XXL'],
            slug: "chill_pullover_hoodie",
            // type: 'hoodies',
            tags: ['hoodie'],
            title: "Chill Pullover Hoodie",
            size: 'all'
        },
        {
            description: "Hermione mediana",
            images: [
                'hermione-medium-2.jpeg',
                'hermione-medium.jpeg',
            ],
            inStock: 85,
            price: 225,
            // sizes: ['XS','S','M'],
            slug: "women_cropped_puffer_jacket",
            // type: 'hoodies',
            tags: ['hoodie'],
            title: "Hermione mediana",
            size: 'medium'
        },
        {
            description: "Hulk mediano",
            images: [
                'hulk-medium-2.jpeg',
                'hulk-medium-2.jpeg',
            ],
            inStock: 10,
            price: 130,
            // sizes: ['XS','S','M','XXL'],
            slug: "women_chill_half_zip_cropped_hoodie",
            // type: 'hoodies',
            tags: ['hoodie'],
            title: "Hulk mediano",
            size: 'medium'
        },
        {
            description: "Kiko mediano",
            images: [
                'kiko-medium-2.jpeg',
                'kiko-medium.jpeg',
            ],
            inStock: 10,
            price: 45,
            // sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_turbine_cropped_long_sleeve_tee",
            // type: 'shirts',
            tags: ['shirt'],
            title: "Kiko mediano",
            size: 'medium'
        },
        {
            description: "Mona mediana",
            images: [
                'mona-medium.jpeg',
                'mona-medium-2.jpeg',
            ],
            inStock: 0,
            price: 40,
            // sizes: ['XS','S'],
            slug: "women_turbine_cropped_short_sleeve_tee",
            // type: 'shirts',
            tags: ['shirt'],
            title: "Mona mediana",
            size: 'medium'
        },
        {
            description: "Monita mediana",
            images: [
                'monita-medium.jpeg',
                'monita-medium-2.jpeg',
            ],
            inStock: 30,
            price: 35,
            // sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_t_logo_short_sleeve_scoop_neck_tee",
            // type: 'shirts',
            tags: ['shirt'],
            title: "Monita mediana",
            size: 'medium'
        },
        {
            description: "Mono mediano",
            images: [
                'mono-medium-2.jpeg',
                'mono-medium.jpeg',
            ],
            inStock: 16,
            price: 40,
            // sizes: ['XS','S','L','XL','XXL'],
            slug: "women_t_logo_long_sleeve_scoop_neck_tee",
            // type: 'shirts',
            tags: ['shirt'],
            title: "Mono mediano",
            size: 'medium'
        },
        {
            description: "Pocoyo mediano",
            images: [
                'pocoyo-medium-2.jpeg',
                'pocoyo-medium.jpeg',
            ],
            inStock: 18,
            price: 35,
            // sizes: ['XS','S','M','L','XL','XXL'],
            slug: "women_small_wordmark_short_sleeve_v-neck_tee",
            // type: 'shirts',
            tags: ['shirt'],
            title: "Pocoyo mediano",
            size: 'medium'
        },
        {
            description: "Chapulin grande",
            images: [
                'chapulin-big.jpeg',
                'chapulin-big-2.jpeg',
            ],
            inStock: 10,
            price: 30,
            // sizes: ['XS','S','M'],
            slug: "kids_cybertruck_long_sleeve_tee",
            // type: 'shirts',
            tags: ['shirt'],
            title: "Chapulin grande",
            size: 'big'
        },
        {
            description: "Frozen grande",
            images: [
                'frozen-big-2.jpeg',
                'frozen-big.jpeg',
            ],
            inStock: 0,
            price: 25,
            // sizes: ['XS','S','M'],
            slug: "kids_scribble_t_logo_tee",
            // type: 'shirts',
            tags: ['shirt'],
            title: "Frozen grande",
            size: 'big'
        },
        {
            description: "Groot grande",
            images: [
                'groot-big-2.jpeg',
                'groot-big.jpeg',
            ],
            inStock: 10,
            price: 25,
            // sizes: ['XS','S','M'],
            slug: "kids_cybertruck_tee",
            // type: 'shirts',
            tags: ['shirt'],
            title: "Groot grande",
            size: 'big'
        },
        {
            description: "Hulk grande",
            images: [
                'hulk-big-2.jpeg',
                'hulk-big.jpeg',
            ],
            inStock: 10,
            price: 30,
            // sizes: ['XS','S','M'],
            slug: "kids_racing_stripe_tee",
            // type: 'shirts',
            tags: ['shirt'],
            title: "Hulk grande",
            size: 'big'
        },
        {
            description: "Kiko grande",
            images: [
                'kiko-big-2.jpeg',
                'kiko-big.jpeg',
            ],
            inStock: 10,
            price: 30,
            // sizes: ['XS','S','M'],
            slug: "kids_3d_t_logo_tee",
            // type: 'shirts',
            tags: ['shirt'],
            title: "Kiko grande",
            size: 'big'
        },
        {
            description: "Mona grande",
            images: [
                'mona-big-2.jpeg',
                'mona-big.jpeg',
            ],
            inStock: 10,
            price: 30,
            // sizes: ['XS','S','M'],
            slug: "kids_checkered_tee",
            // type: 'shirts',
            tags: ['shirt'],
            title: "Kids Checkered Tee",
            size: 'big'
        },
    ]
}