import Constants from 'expo-constants';
import { RestClientError } from './RestClientError';

export class RestClient {
  private readonly baseUrl = Constants.expoConfig?.extra?.restApiBaseUrl;

  async post<ResponseType, DataType>(
    url: string,
    data: DataType,
    headers?: any
  ): Promise<ResponseType> {
    this.validateIfHasUrl(url);

    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    return await response.json();
  }

  private validateIfHasUrl(url?: string) {
    if (!url) {
      throw new RestClientError('Requests must have url.');
    }
  }
}
