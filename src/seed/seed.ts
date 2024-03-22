interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    size: ValidSizes;
}

// type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
type ValidSizes = 'small' | 'medium' | 'big' | 'all';
type ValidTypes = 'amigurumis'|'tablecloths';

interface SeedData {
    categories: string[];
    products: SeedProduct[],
}

export const initialData: SeedData = {
    categories: [
        'Amigurumis', 'Tablecloths'
    ],
    products: [
        {
            description: "Pequeño amigurumi de Batman de 5 cm de alto, puedes encontrar muchos más personajes de Marvel o DC en nuestro sitio web.",
            images: [
                'batman-small-2.jpeg',
                'batman-small.jpeg',
            ],
            inStock: 1,
            price: 4000,
            slug: "amigurumi_small_batman",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Batman pequeño",
            size: 'small'
        },
        {
            description: "Pequeño amigurumi de Hulk de 5 cm de alto, puedes encontrar muchos más personajes de Marvel o DC en nuestro sitio web.",
            images: [
                'hulk-small-2.jpg',
                'hulk-small.jpg',
            ],
            inStock: 1,
            price: 4000,
            slug: "amigurumi_small_hulk",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Hulk pequeño",
            size: 'small'
        },

        {
            description: "Perrito pequeño de 5 cm de alto.",
            images: [
                'perrito-small-2.jpeg',
                'perrito-small.jpeg'
            ],
            inStock: 1,
            price: 4000,
            slug: "amigurumi_small_perrito",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Perrito pequeño",
            size: 'small'
        },

        {
            description: "Perro pequeño de 5 cm de alto.",
            images: [
                'perro-small.jpeg',
                'perro-small-2.jpeg',
            ],
            inStock: 1,
            price: 4000,
            slug: "amigurumi_small_perro",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Perro pequeño",
            size: 'small'
        },
        {
            description: "Pequeño amigurumi de Superman de 5 cm de alto, puedes encontrar muchos más personajes de Marvel o DC en nuestro sitio web.",
            images: [
                'superman-small.jpeg',
                'superman-small-2.jpeg',
            ],
            inStock: 1,
            price: 4000,
            slug: "amigurumi_small_superman",
            type: 'amigurumis',
            tags: ['shirt'],
            title: "Superman pequeño",
            size: 'small'
        },
        {
            description: "Pequeño amigurumi de la Mujer Maravilla de 5 cm de alto, puedes encontrar muchos más personajes de Marvel o DC en nuestro sitio web.",
            images: [
                'wonder-woman-small-2.jpeg',
                'wonder-woman-small.jpeg',
            ],
            inStock: 0,
            price: 35,
            slug: "amigurumi_small_wonder-woman",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Mujer Maravilla pequeña",
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
            slug: "chill_pullover_hoodie",
            type: 'amigurumis',
            tags: ['hoodie'],
            title: "Chill Pullover Hoodie",
            size: 'all'
        },
        {
            description: "Mediano amigurumi de Hermione de la gran película Harry Potter de 11 cm de alto, puedes encontrar muchos más personajes Harry Potter en nuestro sitio web.",
            images: [
                'hermione-medium-2.jpeg',
                'hermione-medium.jpeg',
            ],
            inStock: 1,
            price: 6000,
            slug: "amigurumi_medium_hermione",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Hermione de Harry Potter mediana",
            size: 'medium'
        },
        {
            description: "Mediano amigurumi de Hulk de 11 cm de alto, puedes encontrar muchos más personajes de Marvel o DC en nuestro sitio web.",
            images: [
                'hulk-medium-2.jpeg',
                'hulk-medium-2.jpeg',
            ],
            inStock: 1,
            price: 6000,
            slug: "amigurumi_medium_hulk",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Hulk mediano",
            size: 'medium'
        },
        {
            description: "Mediano amigurumi de Kiko del Chavo del 8 de 11 cm de alto, puedes encontrar muchos más personajes del Chavo del 8 en nuestro sitio web.",
            images: [
                'kiko-medium-2.jpeg',
                'kiko-medium.jpeg',
            ],
            inStock: 1,
            price: 6000,
            slug: "amigurumi_medium_kiko",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Kiko de El Chavo del 8 mediano",
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
            slug: "women_turbine_cropped_short_sleeve_tee",
            type: 'amigurumis',
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
            type: 'amigurumis',
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
            type: 'amigurumis',
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
            type: 'amigurumis',
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
            type: 'amigurumis',
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
            type: 'amigurumis',
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
            type: 'amigurumis',
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
            type: 'amigurumis',
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
            type: 'amigurumis',
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
            type: 'amigurumis',
            tags: ['shirt'],
            title: "Kids Checkered Tee",
            size: 'big'
        },
    ]
}