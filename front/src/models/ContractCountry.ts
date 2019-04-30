import { ContractUniversity } from './ContractUniversity';

export interface ContractCountry {
    name: string;
    contract_by_university: ContractUniversity[];
}
