import { gql } from '@apollo/client';

export interface CardListDto {
  id: string;
  name: string;
}

export const MUTATION_CREATE_CARD = gql`
  mutation CreateCard($data: CardInput!) {
    createCard(data: $data) {
      id
      name
    }
  }
`;
