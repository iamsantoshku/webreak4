const addToCartModel = require("../../models/cartProduct")

// const addToCartController = async(req,res)=>{
//     try{
//         const { productId } = req?.body
//         const currentUser = req.userId

//         const isProductAvailable = await addToCartModel.findOne({ productId,userId : currentUser })

//         console.log("isProductAvailabl   ",isProductAvailable)

//         if(isProductAvailable){
//             return res.json({
//                 message : "Already exits in Add to cart",
//                 success : false,
//                 error : true
//             })
//         }

//         const payload  = {
//             productId : productId,
//             quantity : 1,
//             userId : currentUser,
//         }

//         const newAddToCart = new addToCartModel(payload)
//         const saveProduct = await newAddToCart.save()


//         return res.json({
//             data : saveProduct,
//             message : "Product Added in Cart",
//             success : true,
//             error : false
//         })
        

//     }catch(err){
//         res.json({
//             message : err?.message || err,
//             error : true,
//             success : false
//         })
//     }
// }


const addToCartController = async (req, res) => {
    try {
        const { productId, size } = req.body; // Destructure size from the request body
        const currentUser = req.userId;

        const isProductAvailable = await addToCartModel.findOne({ productId, userId: currentUser, size });

        if (isProductAvailable) {
            return res.json({
                message: "Already exists in Add to Cart",
                success: false,
                error: true,
            });
        }

        const payload = {
            productId,
            quantity: 1,
            userId: currentUser,
            size, // Save size in the payload
        };

        const newAddToCart = new addToCartModel(payload);
        const saveProduct = await newAddToCart.save();

        return res.json({
            data: saveProduct,
            message: "Product Added in Cart",
            success: true,
            error: false,
        });

    } catch (err) {
        res.json({
            message: err?.message || err,
            error: true,
            success: false,
        });
    }
};



module.exports = addToCartController