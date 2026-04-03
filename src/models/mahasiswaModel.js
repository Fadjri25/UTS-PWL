import prisma from '../config/prisma.js';

export const getAll = async () => {
  return await prisma.mahasiswa.findMany();
};

export const getById = async (id) => {
  return await prisma.mahasiswa.findUnique({
    where: { id: parseInt(id) },
  });
};

export const create = async (data) => {
  return await prisma.mahasiswa.create({
    data: {
      nama: data.nama,
      nim: data.nim,
    },
  });
};

export const update = async (id, data) => {
  return await prisma.mahasiswa.update({
    where: { id: parseInt(id) },
    data: {
      nama: data.nama,
      nim: data.nim,
    },
  });
};

export const remove = async (id) => {
  return await prisma.mahasiswa.delete({
    where: { id: parseInt(id) },
  });
};