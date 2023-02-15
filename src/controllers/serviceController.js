const { Service: ServiceModel } = require("../models/Service");

const serviceController = {

    create: async(req, res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            }

            const response = await ServiceModel.create(service);

            res.status(201).json({ response, msg: "Serviço criado com sucesso!" });
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find();

            res.json(services);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);

            res.json(service);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const deletedService = await ServiceModel.findByIdAndDelete(id);

            res.status(200).json({ deletedService, msg: "Serviço excluído com sucesso" });
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;

            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            }

            const updatedServices = await ServiceModel.findByIdAndUpdate(id, service);

            res.status(200).json({ service, msg: "Serviço atualizado com sucesso" });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = serviceController;