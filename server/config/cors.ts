import { app } from './app';
import cors from 'cors';
import express from 'express';

app.use(express.json());
app.use(cors());