﻿// <auto-generated />
using Educa.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Educa.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20221112233434_firstMigration")]
    partial class firstMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Educa.Model.Aluno", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    b.Property<string>("Cpf")
                        .IsRequired()
                        .HasColumnType("longtext")
                        .HasColumnName("cpf_aluno");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("longtext")
                        .HasColumnName("email_aluno");

                    b.Property<string>("Idade")
                        .IsRequired()
                        .HasColumnType("longtext")
                        .HasColumnName("idade_aluno");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("longtext")
                        .HasColumnName("nome_aluno");

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasColumnType("longtext")
                        .HasColumnName("telefone_aluno");

                    b.HasKey("Id");

                    b.ToTable("alunos");
                });
#pragma warning restore 612, 618
        }
    }
}