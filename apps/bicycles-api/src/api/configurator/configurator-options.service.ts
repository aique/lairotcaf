import { ConfiguratorOptions } from "../model/configurator.model";

export class ConfiguratorOptionsService {
    provide(product: string): ConfiguratorOptions {
        return {
            components: [{
                name: 'Frame type',
                options: [{
                        name: 'Full-suspension',
                        price: 130
                    }, {
                        name: 'Diamond',
                        price: 150,
                    }],
                }, {
                name: 'Wheels',
                options: [{
                        name: 'Road wheels',
                        price: 80
                    }, {
                        name: 'Mountain wheels',
                        price: 95,
                }],
            }]
        }
    }
}