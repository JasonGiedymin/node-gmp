
#ifndef __NODE_GMP_H__
#define __NODE_GMP_H__

#include <v8.h>
#include <node.h>
#include <node_object_wrap.h>

#include <gmp.h>
#include <gmpxx.h>


using namespace v8;


class GInt: public node::ObjectWrap {
  public:
    ~GInt();
    GInt(mpz_class num);
    static Handle<Value> Add(const Arguments &args);
    static Handle<Value> Sub(const Arguments &args);
    static Handle<Value> Mul(const Arguments &args);
    static Handle<Value> Div(const Arguments &args);
    static Handle<Value> Pow(const Arguments &args);
    static Handle<Value> Cmp(const Arguments &args);
    static Handle<Value> ToString(const Arguments &args);
    static Handle<Value> ToNumber(const Arguments &args);

    static Handle<Value> New(const Arguments &args);

  private:
    mpz_class val_;
};

class GFloat: public node::ObjectWrap {
  public:
    ~GFloat();
    GFloat(mpf_class num);
    static Handle<Value> Add(const Arguments &args);
    static Handle<Value> Sub(const Arguments &args);
    static Handle<Value> Mul(const Arguments &args);
    static Handle<Value> Div(const Arguments &args);
    static Handle<Value> Pow(const Arguments &args);
    static Handle<Value> Cmp(const Arguments &args);
    static Handle<Value> Sqrt(const Arguments &args);
    static Handle<Value> Ceil(const Arguments &args);
    static Handle<Value> Floor(const Arguments &args);
    static Handle<Value> ToString(const Arguments &args);
    static Handle<Value> ToNumber(const Arguments &args);

    static Handle<Value> New(const Arguments &args);

  private:
    mpf_class val_;
};

class GRational: public node::ObjectWrap {
  public:
    ~GRational();
    GRational(mpq_class num);
    static Handle<Value> Add(const Arguments &args);
    static Handle<Value> Sub(const Arguments &args);
    static Handle<Value> Mul(const Arguments &args);
    static Handle<Value> Div(const Arguments &args);
    static Handle<Value> Pow(const Arguments &args);
    static Handle<Value> Cmp(const Arguments &args);
    static Handle<Value> ToString(const Arguments &args);
    static Handle<Value> ToNumber(const Arguments &args);

    static Handle<Value> New(const Arguments &args);

  private:
    mpq_class val_;
};

#endif // NODE_GMP_H
