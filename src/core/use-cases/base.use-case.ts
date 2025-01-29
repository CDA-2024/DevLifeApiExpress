export abstract class BaseUseCase<T> {
  abstract create(entity: T): Promise<T>;
  abstract read(id: string): Promise<T>;
  abstract update(entity: T): Promise<T>;
  abstract delete(id: string): Promise<void>;
  abstract list(): Promise<T[]>;
}