import Celular from "../model/celularModel.js";

export const create = async (req, res) => {
    try {

        const celularData = new Celular(req.body);

        if (!celularData) {
            return res.status(404).json({msg: "Celular data not found" });
        }

        const savedData = await celularData.save();
        res.status(200).json({msg:"Celular criado com sucesso!"});


    } catch (error) {
        res.status(500).json({ error: error });
    }
}


export const getAll = async (req, res) => {
    try {

        const celularData = await Celular.find();

        if (!celularData) {
            return res.status(404).json({ msg: "Celular data not found" });
        }
        res.status(200).json(celularData);


    } catch (error) {
        res.status(500).json({ error: error });
    }
}

 export const getOne = async (req, res) => {
    try {

        const id = req.params.id;
        const celularExist = await Celular.findById(id);

        if (!celularExist) {
            return res.status(404).json({ msg: "Celular not found" });
        }
        res.status(200).json(celularExist);


    } 
    catch (error) {
        res.status(500).json({ error: error });
    }
}

export const update = async (req, res) => {
    try {

        const id = req.params.id;
        const celularExist = await Celular.findById(id);

        if (!celularExist) {
            return res.status(401).json({ msg: "Celular not found" });
        }

        const updatedData = await Celular.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({msg:"Celular alterado com sucesso!"});


    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const deleteCelular = async (req, res) => {
    try {

        const id = req.params.id;
        const celularExist = await Celular.findById(id);

        if (!celularExist) {
            return res.status(404).json({ msg: "Celular not exist" });
        }
        await Celular.findByIdAndDelete(id);
        res.status(200).json({ msg: "Celular deletado com sucesso!" });


    } catch (error) {
        res.status(500).json({ error: error });
    }
}