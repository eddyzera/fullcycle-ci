import { describe, it, expect } from "vitest";
import { soma } from '../math';

describe('Soma', () => {
  it('devera calcular a soma de 10 + 5 e retorna 15', () => {
    const result = soma(10, 5)
    expect(result).toBe(15)
  })
})