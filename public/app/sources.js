export default [
    {
        name: 'environmentMapTexture',
        type: 'cubeTexture',
        path:
        [
            'static/textures/environmentMap/px.jpg',
            'static/textures/environmentMap/nx.jpg',
            'static/textures/environmentMap/py.jpg',
            'static/textures/environmentMap/ny.jpg',
            'static/textures/environmentMap/pz.jpg',
            'static/textures/environmentMap/nz.jpg'
        ]
    },
    {
        name: 'foxModel',
        type: 'gltfModel',
        path: 'https://d1a370nemizbjq.cloudfront.net/5369b24c-1282-4520-8133-e19f6a93b81c.glb'
    },
    {
        name: 'playerAnimation',
        type: 'gltfModel',
        path: 'static/animations/MaleIdle.glb'
    },  
    {
        name: 'grassColorTexture',
        type: 'texture',
        path: 'static/textures/dirt/color.jpg'
    },
    {
        name: 'testTexture',
        type: 'texture',
        path: 'https://r105.threejsfundamentals.org/threejs/resources/images/bayer.png'
    },  
    {
        name: 'grassNormalTexture',
        type: 'texture',
        path: 'static/textures/dirt/normal.jpg'
    }
]