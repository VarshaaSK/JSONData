

const mockData = {
    data : [
        {
            Color : "Red"
        }
    ]
}

export default {
    get : jest.fn().mockResolvedValue(mockData)
}